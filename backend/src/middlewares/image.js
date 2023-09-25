function refactorFormat(format) {
  return {
    width: format.width,
    height: format.height,
    url: format.url,
  }
}

function refactorFormats(formats) {
  for (let format in formats) {
    formats[format] = refactorFormat(formats[format]);
  }
}

function getMaxSizeName(formats, imageSize) {
  const sizes = [ 'thumbnail', 'small', 'medium', 'large' ];

  if (!(sizes.includes(imageSize))) {
    const error = new Error(
      `Некорректный размер изображения: ${imageSize}. ` +
      `Должен быть один из следующих: ${sizes}`
    );
    error.code = 400;
    throw error;
  }

  for (let i = sizes.indexOf(imageSize); i >= 0; i--) {
    if (sizes[i] in formats)
      return sizes[i];
  }
}

function refactorImage(image, imageSize = null) {
  if (imageSize) {
    const maxImageSize = getMaxSizeName(image.formats, imageSize);
    const format = image.formats[maxImageSize];

    return {
      width: format.width,
      height: format.height,
      url: format.url,
    };
  }

  const imageNew = {
    width: image.width,
    height: image.height,
    url: image.url,
    formats: image.formats,
  };

  refactorFormats(imageNew.formats, imageSize);

  return imageNew;
}

function refactorResponse(data, imageSize = null) {
  for (let key in data) {
    if (/image.*/.test(data[key]?.mime) && 'formats' in data[key]) {
      data[key] = refactorImage(data[key], imageSize);
    }

    else if (typeof data[key] == 'object')
      refactorResponse(data[key], imageSize);
  }
}

async function respond(ctx, next) {
  await next();
  if (!ctx.url.startsWith('/api')) {
    return;
  }

  const params = new URLSearchParams(ctx.request.url.split('?')[1])

  try {
    refactorResponse(ctx.response.body, params.get('imageSize'));
  } catch (error) {
    if (error.code === 400)
      ctx.badRequest(error.message);
    else throw error;
  }
}

module.exports = () => respond;
