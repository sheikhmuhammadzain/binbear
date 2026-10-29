import Link from "next/link";

export default function Testimonial3() {
    return (
        <>
            <section className="section pt-60 pb-65 mt-50">
                <div className="container">
                    <div className="bg-testimonial-3">
                        <div className="row align-items-start">
                            <div className="col-xl-4 col-lg-12 mb-30">
                                <h2 className="title-favicon-2 color-white mb-10 wow animate__animated animate__fadeIn">
                                    Testimonials</h2>
                                <p className="font-md color-white mb-30 wow animate__animated animate__fadeIn">Hear from our
                                    users who have saved thousands on their Startup and SaaS solution spend. Quo nostrum
                                    praesentium At ratione iusto qui labore nesciunt ad architecto dolor est odio molestias
                                    non molestiae incidunt in praesentium odit.</p>
                                <div className="mt-20"><Link className="btn btn-brand-1-big mr-20 wow animate__animated animate__fadeIn" href="contact"style={{backgroundColor:'orange'}}>Free Estimate</Link><Link className="btn btn-link-medium btn-link-white wow animate__animated animate__fadeIn" href="#">Learn More
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                            <div className="col-xl-8 col-lg-12 mb-30">
                                <div className="row align-items-start">
                                    <div className="col-lg-6 position-relative wow animate__animated animate__fadeIn">
                                        <div className="box-testimonial-3-left">
                                            <div className="mb-30">
                                                <div className="card-testimonial-grid card-testimonial-3">
                                                    <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/homepage1/author.png" alt="transp" /></Link>
                                                        <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">Guy
                                                            Hawkins</span></Link><span className="font-sm color-grey-500 department">Bank of
                                                                America</span></div>
                                                    </div>
                                                    <p className="font-sm color-grey-700">Access the same project through five
                                                        different dynamic views: a kanban board, Gantt chart, spreadsheet,
                                                        calendar or simple task list.</p>
                                                </div>
                                            </div>
                                            <div className="mb-30">
                                                <div className="card-testimonial-grid card-testimonial-3">
                                                    <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/homepage1/author.png" alt="transp" /></Link>
                                                        <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">Guy
                                                            Hawkins</span></Link><span className="font-sm color-grey-500 department">Bank of
                                                                America</span></div>
                                                    </div>
                                                    <p className="font-sm color-grey-700">Access the same project through five
                                                        different dynamic views: a kanban board, Gantt chart, spreadsheet,
                                                        calendar or simple task list.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 position-relative wow animate__animated animate__fadeIn">
                                        <div className="box-testimonial-3-right">
                                            <div className="mb-30">
                                                <div className="card-testimonial-grid card-testimonial-3">
                                                    <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/homepage1/author.png" alt="transp" /></Link>
                                                        <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">Guy
                                                            Hawkins</span></Link><span className="font-sm color-grey-500 department">Bank of
                                                                America</span></div>
                                                    </div>
                                                    <p className="font-sm color-grey-700">Access the same project through five
                                                        different dynamic views: a kanban board, Gantt chart, spreadsheet,
                                                        calendar or simple task list.</p>
                                                </div>
                                            </div>
                                            <div className="mb-30">
                                                <div className="card-testimonial-grid card-testimonial-3">
                                                    <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/homepage1/author.png" alt="transp" /></Link>
                                                        <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">Guy
                                                            Hawkins</span></Link><span className="font-sm color-grey-500 department">Bank of
                                                                America</span></div>
                                                    </div>
                                                    <p className="font-sm color-grey-700">Access the same project through five
                                                        different dynamic views: a kanban board, Gantt chart, spreadsheet,
                                                        calendar or simple task list.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
