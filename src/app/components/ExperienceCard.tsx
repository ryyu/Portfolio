import React from 'react'

type experienceCardProps = {
    Title: string
    subtitle: string,
    points: string[]
    exampleLink: string
    exampleLinkLabel: string
}

const ExperienceCard = ({
    Title,
    subtitle,
    points,
    exampleLink,
    exampleLinkLabel
}: experienceCardProps) => {

    if (Title == "Resume") {
        return (
            <div className='flex flex-col ps-6 gap-4'>
                <h1 className='text-4xl'>{Title}</h1>
                <hr className='border-slate-500'></hr>
                <p>{subtitle}</p>
                <embed src="/Ryan Yu Resume.pdf" width="550" height="700" type="application/pdf"></embed>
            </div>
        )
    }

  return (
    <div className='flex flex-col ps-6 gap-4'>
        <h1 className='text-4xl'>{Title}</h1>
        <hr className='border-slate-500'></hr>
        <p>{subtitle}</p>
        <ul className='list-disc list-inside'>
            {
                points.map((point, idx) => {
                    return (
                        <li key={idx}>{point}</li>
                    )
                })
            }
            <li className='underline'><a href={exampleLink} target='_blank'>{exampleLinkLabel}</a></li>
        </ul>
    </div>
  )
}

export default ExperienceCard