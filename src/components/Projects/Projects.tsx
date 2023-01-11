import React from 'react'
import image1 from "../../assets/projects/bagishevprav.jpg"
import image2 from "../../assets/projects/page.png"
import image3 from "../../assets/projects/cyberscore.png"
import image4 from "../../assets/projects/tsvinger.jpg"
import image5 from "../../assets/projects/d4b.jpg"
import image6 from "../../assets/projects/image-2.svg"
import image7 from "../../assets/projects/grozber.jpg"
import image8 from "../../assets/projects/image-6.jpg"
import image9 from "../../assets/projects/cybersquad.jpg"
import image10 from "../../assets/projects/videostena.jpg"
import image11 from "../../assets/projects/defence.jpg"
import image12 from "../../assets/projects/image-12.jpg"
import image13 from "../../assets/projects/next.jpg"
import image14 from "../../assets/projects/gosnomer.jpg"
import image15 from "../../assets/projects/royalrussia.jpg"
import image16 from "../../assets/projects/supportex.jpg"

const Projects = () => {
    const items = [
        {
            image: image1,
            title: 'Bagishevprav',
            subtitle: 'Layout | Corporate website',
            url: 'https://bagishevprav.ru/'
        },

        {
            image: image4,
            title: 'Tsvinger',
            subtitle: 'Layout | Corporate website',
            url: 'https://tsvinger.ru/'
        },

        {
            image: image3,
            title: 'Cyberscore',
            subtitle: 'Layout | Information portal',
            url: 'https://cyberscore.live/'
        },

        {
            image: image6,
            title: 'Bonapart',
            subtitle: 'Layout | Landing',
            url: 'https://bonapartnsk.ru/'
        },

        {
            image: image8,
            title: 'Elite Club',
            subtitle: 'Layout | Landing',
            url: 'https://elitetaxi.club/'
        },

        {
            image: image7,
            title: 'Grozber',
            subtitle: 'Layout | Online store',
            url: 'https://grozber.ua/'
        },

        {
            image: image10,
            title: 'Видео Стена',
            subtitle: 'Layout | Information portal',
            url: 'https://test.e-ksenia.com/video-stena/'
        },

        {
            image: image9,
            title: 'CyberSquad',
            subtitle: 'Layout | Landing',
            url: 'https://cybersquad.pro/'
        },

        {
            image: image13,
            title: 'Next',
            subtitle: 'Layout | Corporate website',
            url: 'https://nextapart.com/'
        },

        {
            image: image12,
            title: 'Школа вдохновения',
            subtitle: 'Layout | Corporate website',
            url: 'https://school-of-inspiration.ru/'
        },
        {
            image: image15,
            title: 'Царский стиль',
            subtitle: 'Layout | Corporate website',
            url: 'https://royalrussia.ru/'
        },
        {
            image: image14,
            title: 'Регзнак',
            subtitle: 'Layout | Landing',
            url: 'https://test.e-ksenia.com/gosnomer/'
        },
        {
            image: image16,
            title: 'Supportex',
            subtitle: 'Layout | Information portal',
            url: 'https://supportex.net/'
        },
        {
            image: image11,
            title: 'Crystal Media',
            subtitle: 'Layout | Landing',
            url: 'https://crystalmedia.by/'
        },
        {
            image: image2,
            title: 'PAGE',
            subtitle: 'Layout | Corporate website',
            url: 'https://spb.pageclub.ru/'
        },
        {
            image: image5,
            title: 'D4B',
            subtitle: 'Layout | Portfolio',
            url: 'https://d4bmedia.com/'
        },
    ]
    return (
        <div className="projects">
            <div className="block-title">- PROJECTS</div>
            <div className="block-subtitle">Recent completed work</div>
            <div className="items">
                {items.map((e, i) => {
                    return (
                        <a href="/" className="item" key={i}>
                            <div className="image">
                                <img src={e.image} alt="" />
                            </div>
                            <div className="info">
                                <div className="info_title">{e.subtitle}</div>
                                {/* <div className="info_subtitle">{e.title}</div> */}
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects