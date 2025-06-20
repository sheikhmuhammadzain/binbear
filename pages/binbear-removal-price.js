import React from 'react';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Head from 'next/head';

const JunkRemovalPrice = () => {
  return (
    <Layout>
      <Head>
        <title>BinBear Junk Removal Pricing</title>
        <meta name="description" content="Affordable junk removal services by BinBear. Get a free estimate today." />
      </Head>
      <div className="container" style={{ marginTop: '80px' }}>
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="color-brand-2 mb-20">BinBear Junk Removal Pricing</h1>
            <p className="font-lg color-gray-500">Transparent, fair, and competitive pricing for all your junk removal needs.</p>
          </div>
        </div>

        <div className="row mt-50">
          <div className="col-lg-6">
            <div className="card-pricing-2">
              <div className="card-title">
                <h3 className="color-brand-2">How Our Pricing Works</h3>
              </div>
              <div className="card-content">
                <p>Our pricing is based on the amount of space your junk takes up in our truck. We offer free, no-obligation estimates to give you an accurate price upfront.</p>
                <ul>
                  <li><i className="fi fi-rr-check"></i>No hidden fees</li>
                  <li><i className="fi fi-rr-check"></i>Upfront, all-inclusive pricing</li>
                  <li><i className="fi fi-rr-check"></i>Labor and travel costs included</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-pricing-2">
              <div className="card-title">
                <h3 className="color-brand-2">Get a Free Estimate</h3>
              </div>
              <div className="card-content">
                <p>Contact us for a free, no-obligation estimate. We'll assess your items and give you a fair price. If you're happy with the price, we can often start the job right away.</p>
                <div className="mt-20">
                  <Link href="/contact" legacyBehavior>
                    <a className="btn btn-brand-2">Request an Estimate</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-50">
          <div className="col-lg-12">
            <h3 className="color-brand-2 text-center">Why Choose BinBear?</h3>
            <p className="font-lg color-gray-500 text-center">We are committed to providing the best value in the junk removal industry.</p>
          </div>
        </div>

        <div className="row mt-30">
          <div className="col-lg-4">
            <div className="card-feature-2">
              <div className="card-image">
                <img src="/assets/imgs/page/homepage1/delivery.png" alt="Best Value" />
              </div>
              <div className="card-info">
                <h5>Best Value</h5>
                <p>We offer competitive pricing and will beat any written estimate from a comparable junk removal service.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-feature-2">
              <div className="card-image">
                <img src="/assets/imgs/page/homepage1/payment.png" alt="Eco-Friendly" />
              </div>
              <div className="card-info">
                <h5>Eco-Friendly</h5>
                <p>We recycle or donate up to 60% of the items we haul, reducing waste in our landfills.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-feature-2">
              <div className="card-image">
                <img src="/assets/imgs/page/homepage1/support.png" alt="Insured" />
              </div>
              <div className="card-info">
                <h5>Licensed & Insured</h5>
                <p>Our teams are fully licensed and insured, so you can trust us with your junk removal needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JunkRemovalPrice;