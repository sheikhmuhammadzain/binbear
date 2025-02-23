import Link from "next/link";

export default function Testimonial4() {
    return (
        <>
            <section className="section mt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="title-favicon color-brand-2 mb-20 wow animate__animated animate__fadeIn">Testimonials
                            </h2>
                            <p className="font-lg color-brand-2 pl-55 wow animate__animated animate__fadeIn">Hear from our users
                                who have saved thousands on their<br className="d-none d-lg-block" />Startup and SaaS solution
                                spend.</p>
                            <div className="box-testimonial-4-item">
                                <div className="card-testimonial-grid">
                                    <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/homepage1/author.png" alt="transp" /></Link>
                                        <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">Courtney
                                            Henry</span></Link><span className="font-sm color-grey-500 department">Bank of
                                                America</span></div>
                                    </div>
                                    <p className="font-md color-grey-700">Access the same project through five different dynamic
                                        views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list. a
                                        kanban board, Gantt chart, spreadsheet, calendar or simple task list.</p>
                                    <div className="card-bottom-info justify-content-between"style={{backgroundColor:'black'}}>
                                        <div className="rating text-start"><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" s/><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><br /><span className="font-sm color-white"style={{backgroundColor:'black'}}>For customer
                                            support</span></div><span className="font-xs color-grey-500 rate-post text-end">Rate: 4.95 / 5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box-img-testimonials-4"><img src="/assets/imgs/page/homepage4/img-testimonial-4.png" alt="transp" />
                                <div className="box-info-testimonial-4">
                                    <h3 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">Satisfied</h3>
                                    <p className="font-sm color-grey-900 wow animate__animated animate__fadeIn">We always strive
                                        to serve our customers in the best way.</p>
                                    <div className="box-button mt-30"><a className="btn btn-link font-sm color-brand-2 wow animate__animated animate__fadeIn">View
                                        Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
