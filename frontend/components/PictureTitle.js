function numeralOfAge(age) {
  if (age % 10 == 1) return 'год'
  if (age > 9 || age < 21) return 'лет'
  if ([2, 3, 4].includes(age % 10)) return 'года'
  return 'лет'
}

function generateAuthorLabel(author) {
  return `${author.fullName}, ${author.age} ${numeralOfAge(author.age)}`
}

export default function PictureTitle({ picture: { title, author } }) {
  return (
    <div className="flex flex-col gap-[10px]">
      <h2 className="text-[36px] font-semibold mt-[-20px] mb-[-13px]">{title}</h2>
      <p className="text-[21px]">{generateAuthorLabel(author)}</p>
    </div>
  )
}
