import React from 'react'

const news = [
    {
        img: "/image/news1.png",
        heading: "HM Revenue & Customs",
        detail: "Payroll is complicated and has to be done on time. As an employer, you are responsible for the mistakes. We can take the stress away from ...",
        link: "https://www.gov.uk/government/organisations/hm-revenue-customs"
    },
    {
        img: "/image/news2.png",
        heading: "Companies House",
        detail: "We incorporate and dissolve limited companies. We register company information and make it available to the public.",
        link: "https://www.gov.uk/government/organisations/companies-house"
    },
    {
        img: "/image/news3.png",
        heading: "GOV.UK",
        detail: "The best place to find government services and information...",
        link: "https://www.gov.uk/"
    },
    {
        img: "/image/news4.png",
        heading: "BBC News",
        link: "https://www.bbc.com/business"
    },
    {
        img: "/image/news5.png",
        heading: "Tax Adviser Magazine",
        link: "https://www.taxadvisermagazine.com/"
    },
    {
        img: "/image/news6.png",
        heading: "The Economist",
        link: "https://www.economist.com/"
    },
    {
        img: "/image/news7.png",
        heading: "PWC",
        link: "https://www.pwc.co.uk/"
    },
    {
        img: "/image/news8.png",
        heading: "Deloitte",
        link: "https://www2.deloitte.com/uk/en.html?icid=site_selector_uk"
    },
    {
        img: "/image/news9.png",
        heading: "KPMG",
        link: "https://home.kpmg/xx/en/home.html"
    },
    {
        img: "/image/news10.png",
        heading: "Ernst & Young",
        link: "https://www.ey.com/en_gl"
    },
]

export default function page() {
    return (
        <div className=' my-6 md:my-8 mx-[10%] lg:mx[20%] flex flex-col'>
            <div className=' flex flex-col items-center justify-center gap-2'>
                <h1 className=' my-4 text-center text-5xl font-bold'>News & Resources</h1>
                <div className=' h-[2px] w-[180px] bg-blue-500 mb-4'></div>
            </div>
            <div className=' flex flex-wrap gap-8 justify-center my-4 md:my-12'>
                {
                    news.map((x, index) => (
                        <div key={index} className=' shadow-xl dark:shadow-gray-700 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden rounded-xl w-full sm:w-[330px]'>
                            <a href={x.link}>
                                <img
                                    src={x.img}
                                    className='h-[320px] sm:h-[220px] w-full hover:scale-105 transition-scale duration-500 p-2 rounded-xl'
                                />
                                <div className='p-3 flex flex-col gap-2 w-full'>
                                    <h1 className='truncate text-center text-xl font-semibold text-slate-700 dark:text-slate-200'>
                                        {x.heading}
                                    </h1>
                                    {x.detail && (
                                        <p>{x.detail}</p>
                                    )}
                                    <p className=' text-slate-700 text-center dark:text-slate-200 underline'>Read More</p>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
