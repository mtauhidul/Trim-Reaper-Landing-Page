"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./styles.css";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // TODO: Uncomment when correct Jobber embed URL is available
  // useEffect(() => {
  //   // Load Jobber script dynamically
  //   const script = document.createElement("script");
  //   script.src = "https://d3ey4db7ze2ot6.cloudfront.net/static/embed.js";
  //   script.setAttribute("data-jobber-request-id", "3bd62871-3373-4f9e-a89c-850d995c8088");
  //   script.async = true;
  //   script.onerror = () => {
  //     console.error("Failed to load Jobber script. Please verify the URL and request ID.");
  //   };
  //   document.body.appendChild(script);

  //   return () => {
  //     // Cleanup on unmount
  //     if (script.parentNode) {
  //       script.parentNode.removeChild(script);
  //     }
  //   };
  // }, []);

  return (
    <>
      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="mobileheaderbox">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Image
                  className="img-responsive"
                  src="/images/full_logo.png"
                  alt="Trim Reaper - Tree Trimming & Brush Removal"
                  width={150}
                  height={30}
                  style={{ width: "150px", height: "auto", marginTop: "2px" }}
                />
              </div>

              <div
                className={`navbar-collapse collapse ${
                  mobileMenuOpen ? "in" : ""
                }`}
              >
                <ul className="nav navbar-nav">
                  <li>
                    <a href="#services">Tree Trimming</a>
                  </li>
                  <li className="active">
                    <a href="#top">Home</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#reviews">Reviews</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="call-section">
            Call Us: <a href="tel:12135550123">(213) 555-0123</a>
          </div>

          <div className="txt-email-section">
            <div className="cta-box-menu">
              <span className="material-icons">message</span>
              <a href="sms:12135550123">Text Us</a>
            </div>

            <div className="cta-box-menu">
              <span className="material-icons">email</span>
              <a href="#emailus">Email Us</a>
            </div>

            <div className="cta-box-menu">
              <span className="material-icons">local_offer</span>
              <a href="#coupons">Coupons</a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="desktop-menu">
        <div className="container">
          <div className="desktop-menu-top-section">
            <div className="desktop-menu-left">
              <Image
                className="img-responsive"
                src="/images/full_logo.png"
                alt="Trim Reaper - Tree Trimming & Brush Removal"
                width={168}
                height={67}
                style={{ width: "168px", height: "auto", marginTop: "0px" }}
              />
            </div>

            <div className="desktop-menu-middle">
              <h2>
                <span
                  className="material-icons"
                  style={{ color: "#2d5016", fontSize: "22pt" }}
                >
                  phone
                </span>{" "}
                <a href="tel:12135550123">(213) 555-0123</a>
              </h2>
              <h3>
                Call The <Link href="/">Tree Trimming</Link> Professionals!
              </h3>
            </div>
          </div>
        </div>

        <div className="desktop-menu-links">
          <div className="container">
            <ul>
              <li>
                <a href="#top">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Top Section */}
      <div className="main-top-section">
        <h2>
          We{" "}
          <span
            style={{
              color: "#ffe300",
              textShadow: "1px 1px 1px #000",
              fontWeight: "bold",
            }}
          >
            CUT TREES
          </span>
          , Not Corners!
        </h2>

        <hr
          style={{
            width: "50%",
            height: "5px",
            color: "#fff",
            textAlign: "center",
            margin: "0 auto",
          }}
        />

        <h3>Professional Tree Trimming & Brush Removal</h3>

        <div className="starspic">
          <Image src="/5-stars.png" alt="5 stars" width={200} height={40} />
        </div>

        <h1 style={{ textAlign: "center" }}>Trim Reaper . COM</h1>

        <div className="cta-buttons-top-section">
          <div className="header-cta-call">
            <a href="tel:12135550123">
              <div className="call-button">Call Us: (213) 555-0123</div>
            </a>
          </div>

          <div className="header-cta-email">
            <a href="#emailus">
              <div className="email-button">Get Free Estimate</div>
            </a>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="container">
        <div className="image-gallery">
          <h2>
            <Link href="/" style={{ color: "#2d5016" }}>
              Tree Trimming & Brush Removal
            </Link>{" "}
            Pictures
          </h2>

          <div className="gallery-details">
            <p>
              Our crew is out trimming trees and clearing brush everyday. We
              handle everything from simple pruning to full property clearance.
              Here are some pictures of our recent work.
            </p>
          </div>

          <a id="coupons"></a>
          <div className="gallery-pics">
            <div className="gallery-picture">
              <Image
                src="/images/tree_trimming_1.png"
                alt="Tree trimming"
                width={400}
                height={400}
              />
            </div>
            <div className="gallery-picture">
              <Image
                src="/images/tree_trimming_2.png"
                alt="Tree trimming service"
                width={400}
                height={400}
              />
            </div>
            <div className="gallery-picture">
              <Image
                src="/images/tree_trimming_3.png"
                alt="Professional tree work"
                width={400}
                height={400}
              />
            </div>
            <div className="gallery-picture">
              <Image
                src="/images/tree_trimming_4.png"
                alt="Tree pruning"
                width={400}
                height={400}
              />
            </div>
            <div className="gallery-picture">
              <Image
                src="/images/tree_trimming_5.png"
                alt="Tree cutting"
                width={400}
                height={400}
              />
            </div>
            <div className="gallery-picture">
              <Image
                src="/images/tree_trimming_6.png"
                alt="Tree maintenance"
                width={400}
                height={400}
              />
            </div>
            <div className="gallery-picture">
              <Image
                src="/images/brush_removal_1.png"
                alt="Brush removal"
                width={400}
                height={400}
              />
            </div>
            <div className="gallery-picture">
              <Image
                src="/images/brush_removal_2.png"
                alt="Brush clearing"
                width={400}
                height={400}
              />
            </div>
            <div className="gallery-picture">
              <Image
                src="/images/vehicle.png"
                alt="Trim Reaper truck"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Coupons Section */}
      <a id="coupons"></a>
      <div className="red-main-sections">
        <h2>Mention these coupons when you call!</h2>
      </div>

      <div className="coupon-section">
        <a
          style={{ color: "#2d5016" }}
          href="sms:+12135550123?&body=Hey, I would like to get a $50 OFF coupon on my tree trimming service."
        >
          <div className="coupon-section-left">
            <h3>Limited Time</h3>
            <h2>$50 OFF</h2>
            <h4>Any Tree Trimming Service</h4>
            <h5>First time customers only. Minimum job size applies.</h5>
            <Image src="/bar-code.png" alt="barcode" width={100} height={60} />
            <h6>CODE: TRIM50</h6>
          </div>
        </a>

        <a href="sms:+12135550123?&body=Hey, I would like to get a FREE on-site consultation.">
          <div className="coupon-section-right">
            <h3>Most Popular</h3>
            <h2>FREE</h2>
            <h3>On-Site Consultation</h3>
            <h4>We come to you. No pressure, just honest advice.</h4>
            <Image
              src="/bar-code.png"
              alt="barcode"
              width={100}
              height={60}
              style={{ marginTop: "25px" }}
            />
            <h6 style={{ fontSize: "20px", marginTop: "10px" }}>
              CODE: FREESTIMATE
            </h6>
          </div>
        </a>
      </div>

      {/* We'd Love To Section */}
      <div className="red-main-sections">
        <a id="about"></a>
        <h2>
          We&apos;d Love To{" "}
          <span
            style={{
              color: "#ffe300",
              fontWeight: "bold",
              textShadow: "1px 1px 2px #000",
            }}
          >
            TRIM YOUR
          </span>{" "}
          Trees!
        </h2>
      </div>

      <div className="container">
        {/* Two Column Section 1 */}
        <div className="two-column-section">
          <h2>Not A Franchise. Just Us.</h2>
          <div className="two-column-section-left-title">
            <div className="two-column-section-right-pic">
              <Image
                className="img-responsive"
                src="/images/vehicle.png"
                alt="Trim Reaper Service"
                width={400}
                height={400}
              />
            </div>

            <p>
              When you call Trim Reaper, you&apos;re talking to the owners. No
              corporate runaround.
            </p>
            <p>
              <span style={{ color: "#2d5016" }}>
                <strong>Same-day or next-day bookings</strong>
              </span>{" "}
              often available.
            </p>
            <p>
              1.{" "}
              <strong>
                <span style={{ color: "#2d5016" }}>Fair</span>
              </strong>
              , honest quotes on the spot
            </p>
            <p>
              2. We answer{" "}
              <strong>
                <span style={{ color: "#2d5016" }}>95% of calls</span>
              </strong>{" "}
              personally
            </p>
            <p>
              3.{" "}
              <strong>
                <span style={{ color: "#2d5016" }}>Licensed & Insured</span>
              </strong>{" "}
              for your peace of mind
            </p>
            <p>We treat your property like our own!</p>
          </div>
        </div>

        <div className="two-column-hr">
          <hr className="two-colum-hr" />
        </div>

        {/* Two Column Section 2 */}
        <div className="two-column-section">
          <h2>Meet Gilbertos - Lead Foreman</h2>

          <div className="two-column-section-right-title">
            <div className="two-column-section-left-pic">
              <Image
                className="img-responsive"
                src="/images/tree_trimming_3.png"
                alt="Gilbertos - Lead Foreman"
                width={400}
                height={400}
              />
            </div>

            <p>
              <span style={{ color: "#2d5016" }}>
                <strong>Gilbertos</strong>
              </span>{" "}
              is our lead foreman and climber.
            </p>
            <p>
              He handles{" "}
              <span style={{ color: "#2d5016" }}>
                <strong>the climbing and cutting</strong>
              </span>
              .
            </p>
            <p>
              &quot;Safety first, and I leave your yard cleaner than I found
              it.&quot;
            </p>
          </div>
        </div>

        <div className="two-column-hr">
          <hr className="two-colum-hr" />
        </div>

        {/* Two Column Section 3 */}
        <div className="two-column-section">
          <h2>We Own Our Equipment. No Delays.</h2>

          <div className="two-column-section-left-title">
            <div className="two-column-section-right-pic">
              <Image
                className="img-responsive"
                src="/images/tree_trimming_1.png"
                alt="Professional Equipment"
                width={400}
                height={400}
              />
            </div>

            <p>Our equipment and experience speak for themselves!</p>
            <p>
              We own{" "}
              <strong>
                <span style={{ color: "#2d5016" }}>all our own equipment</span>
              </strong>{" "}
              - no rental delays!
            </p>
            <p>
              1. We handle{" "}
              <strong>
                <span style={{ color: "#2d5016" }}>
                  crown reduction, shaping, and pruning
                </span>
              </strong>
            </p>
            <p>
              2. We provide{" "}
              <span style={{ color: "#2d5016" }}>
                <strong>brush removal & haul away</strong>
              </span>{" "}
              service
            </p>
            <p>
              3. We have{" "}
              <strong>
                <span style={{ color: "#2d5016" }}>emergency service</span>
              </strong>{" "}
              available for storm damage
            </p>
            <p>We clean up. Seriously. Not a leaf left behind.</p>
          </div>
        </div>
      </div>

      {/* Promise Section */}
      <div className="red-main-sections">
        <h2>
          Why{" "}
          <span
            style={{
              color: "#ffe300",
              fontWeight: "bold",
              textShadow: "1px 1px 2px #000",
            }}
          >
            NEIGHBORS TRUST
          </span>{" "}
          Us
        </h2>
      </div>

      <div className="container">
        <div className="promise-section">
          <h3>1. Licensed & Insured</h3>
          <p>
            Your peace of mind matters. We carry full liability insurance and
            workers compensation.
          </p>
          <p>
            Unlike unlicensed{" "}
            <span style={{ color: "#2d5016" }}>
              <strong>fly-by-night operators</strong>
            </span>
            , we&apos;re a legitimate business that protects both you and our
            crew.
          </p>
          <p>You can trust us with your property!</p>

          <h3>2. Fair, Upfront Pricing</h3>
          <p>
            No hidden fees. No bait-and-switch. We give you an honest quote and
            stick to it.
          </p>
          <p>Why?</p>
          <p>Because we believe in treating people right.</p>
          <p>
            We provide{" "}
            <span style={{ color: "#2d5016" }}>
              <strong>FAIR, TRANSPARENT PRICING</strong>
            </span>
            ! No surprises at the end.
          </p>

          <h3>3. We Own Our Equipment</h3>
          <p>
            <strong>
              <span style={{ color: "#2d5016" }}>No rental delays</span>
            </strong>{" "}
            or scheduling issues because we own all our equipment.
          </p>
          <p>What does that mean?</p>
          <p>
            When you book with us, we show up with professional-grade tools
            ready to work.
          </p>
          <p>We&apos;re not dependent on equipment rentals or availability.</p>
          <p>
            Our{" "}
            <strong>
              <span style={{ color: "#2d5016" }}>professional equipment</span>
            </strong>{" "}
            means we can handle jobs of any size efficiently and safely.
          </p>

          <h3>4. We Clean Up</h3>
          <p>Seriously.</p>
          <p>
            Some tree service companies do the work but leave a mess behind.
            Branches everywhere, debris in your driveway, sawdust all over.
          </p>
          <p>Not us.</p>
          <p>We haul everything away. Branches, logs, leaves—gone.</p>
          <p>We leave your yard cleaner than we found it.</p>
          <p>NOT A LEAF LEFT BEHIND!</p>
        </div>
      </div>

      {/* Other Types of Jobs */}
      <div className="red-main-sections">
        <a id="services"></a>
        <h5>Our Tree Services</h5>
      </div>

      <div className="container">
        <div className="recent-jobs">
          <h2>Tree Trimming</h2>
          <div className="recent-jobs-left">
            <h3>
              <span style={{ fontWeight: "bold" }}>Service: </span>Crown
              Reduction, Shaping & Pruning
            </h3>
            <h3>
              <span style={{ fontWeight: "bold" }}>Purpose: </span>Keep Trees
              Healthy & Safe
            </h3>
          </div>

          <div className="recent-jobs-right">
            <Image
              src="/images/tree_trimming_2.png"
              alt="Tree trimming service"
              width={400}
              height={400}
            />
          </div>
          <span style={{ fontWeight: "bold" }}>Brief Explanation:</span>
          <p>
            Professional tree trimming keeps your trees healthy, safe, and
            looking great. We handle crown reduction, shaping, and strategic
            pruning.
          </p>
          <p>
            Regular maintenance prevents disease, improves tree structure, and
            reduces hazards.
          </p>
        </div>

        <div className="recent-jobs">
          <h2>Brush Removal</h2>
          <div className="recent-jobs-left">
            <h3>
              <span style={{ fontWeight: "bold" }}>Service: </span>Clearing
              Overgrown Areas
            </h3>
            <h3>
              <span style={{ fontWeight: "bold" }}>Purpose: </span>Fire Hazard
              Reduction & Property Clearance
            </h3>
          </div>

          <div className="recent-jobs-right">
            <Image
              src="/images/brush_removal_1.png"
              alt="Brush removal"
              width={400}
              height={400}
            />
          </div>
          <span style={{ fontWeight: "bold" }}>Brief Explanation:</span>
          <p>
            We clear overgrown hillsides, fire hazards, and backyard jungles.
            Essential for properties in high fire-risk areas.
          </p>
          <p>
            Professional brush clearing protects your home and creates
            defensible space as required by LA County fire regulations.
          </p>
        </div>
      </div>

      {/* Reviews Section */}

      <div className="container">
        <div className="reviews-section">
          <div
            className="embedsocial-reviews"
            data-ref="4d4c1774c6dcf103e269da8894b7884d58522169"
          ></div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="red-main-sections">
        <a id="contact"></a>
        <h3>Call Us. Text Us. Email Us.</h3>
        <h4>It&apos;s Really Easy To Reach Us</h4>
      </div>

      <div className="container">
        <div className="contact-section">
          <h2>
            Call Us: <a href="tel:12135550123">(213) 555-0123</a>
          </h2>
        </div>

        <div className="hr-small"></div>

        <div className="contact-section">
          <h2>
            Text Us: <a href="sms:12135550123">(213) 555-0123</a>
          </h2>
        </div>

        <div className="hr-small"></div>

        <div className="contact-section">
          <h2>Get A Free Quote:</h2>
          <div id="3bd62871-3373-4f9e-a89c-850d995c8088"></div>
        </div>
      </div>

      {/* More Services */}
      <div className="red-main-sections">
        <h3>Emergency Service Available</h3>
        <h6>Storm Damage & Fallen Branches</h6>
      </div>

      <div className="container">
        <div className="white-section">
          <h2>What Does It Cost?</h2>

          <p>
            We don&apos;t compete on price. We compete on quality and honest
            service.
          </p>
          <p>
            <span style={{ color: "#2d5016" }}>
              <strong>LOW-PRICED TREE SERVICE</strong>
            </span>{" "}
            companies often:
          </p>
          <p>1. Lack proper insurance</p>
          <p>2. Use inexperienced crews</p>
          <p>3. Skip important safety protocols</p>
          <p>4. Leave messes behind</p>
          <p>5. Damage your property</p>
          <p>6. Miss appointments</p>
          <p>7. Go out of business suddenly</p>
          <p>8. Don&apos;t answer calls</p>
          <p>
            We provide fair, transparent pricing based on the scope of work,
            tree size, and job complexity.
          </p>
          <p>
            When you call, we&apos;ll ask about your property and often schedule
            a free on-site consultation.{" "}
            <strong>
              <span style={{ color: "#2d5016" }}>
                HONEST PRICING, NO SURPRISES!
              </span>
            </strong>
          </p>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="red-main-sections">
        <h3>Book Early</h3>
        <h6>Same-Day & Next-Day Service Often Available</h6>
      </div>

      <div className="container">
        <div className="white-section">
          <h2>Professional Tree Care Makes Sense!</h2>

          <p>
            Choose a company that&apos;s licensed, insured, and treats your
            property with respect.
          </p>
          <p>
            Don&apos;t risk your property with unlicensed workers or uninsured
            companies.
          </p>
          <p>
            Get professional tree trimming and brush removal from a team that
            owns their equipment and cleans up after themselves!
          </p>
        </div>
      </div>

      {/* Contact Section 2 */}
      <div className="red-main-sections">
        <a id="emailus"></a>
        <h3>Call Us. Text Us. Email Us.</h3>
        <h4>It&apos;s Really Easy To Reach Us</h4>
      </div>

      <div className="container">
        <div className="contact-section">
          <h2>
            Call Us: <a href="tel:12135550123">(213) 555-0123</a>
          </h2>
        </div>

        <div className="hr-small"></div>

        <div className="contact-section">
          <h2>
            Text Us: <a href="sms:12135550123">(213) 555-0123</a>
          </h2>
        </div>

        <div className="hr-small"></div>

        <div className="contact-section">
          <h2>Get A Free Quote:</h2>
          <div id="3bd62871-3373-4f9e-a89c-850d995c8088-2"></div>
        </div>
      </div>

      {/* Hours Section */}
      <div className="red-main-sections">
        <a id="hours"></a>
        <h3>Hours of Operation</h3>
        <h4>When Are We Open?</h4>
      </div>

      <div className="container">
        <div className="hours-section">
          <div className="hours-section-day">Monday: </div>
          <div className="hours-section-time">7:30 AM - 6:30 PM</div>

          <div className="hours-section-day">Tuesday:</div>
          <div className="hours-section-time"> 7:30 AM - 6:30 PM</div>

          <div className="hours-section-day">Wednesday: </div>
          <div className="hours-section-time">7:30 AM - 6:30 PM</div>

          <div className="hours-section-day">Thursday: </div>
          <div className="hours-section-time">7:30 AM - 6:30 PM</div>

          <div className="hours-section-day">Friday: </div>
          <div className="hours-section-time">7:30 AM - 6:30 PM</div>

          <div className="hours-section-day">Saturday: </div>
          <div className="hours-section-time">9:00 AM - 6:30 PM</div>

          <div className="hours-section-day">Sunday: </div>
          <div className="hours-section-time">CLOSED</div>
        </div>
      </div>

      {/* Service Area */}
      <div className="red-main-sections">
        <a id="hours"></a>
        <h3>Where We Work</h3>
        <h4>Greater Los Angeles Area</h4>
      </div>

      <div className="container">
        <div className="map-section">
          <div
            style={{
              padding: "20px",
              textAlign: "center",
              background: "#f5f5f5",
              borderRadius: "8px",
            }}
          >
            <h2 style={{ color: "#2d5016" }}>
              We Proudly Serve Greater Los Angeles
            </h2>
            <p style={{ fontSize: "16pt", lineHeight: "24pt" }}>
              <strong>Silver Lake</strong> • <strong>Echo Park</strong> •{" "}
              <strong>Los Feliz</strong> • <strong>Hollywood</strong> •{" "}
              <strong>Highland Park</strong> • <strong>Eagle Rock</strong> •{" "}
              <strong>Pasadena</strong> • <strong>Glendale</strong> •{" "}
              <strong>Atwater Village</strong> •{" "}
              <strong>Mount Washington</strong> • <strong>Glassell Park</strong>{" "}
              • <strong>Boyle Heights</strong>
            </p>
            <p style={{ marginTop: "20px" }}>
              Don&apos;t see your area? We&apos;re expanding fast. Give us a
              call!
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="red-main-sections">
        <h2>F.A.Q.</h2>
        <a id="faq1"></a>
      </div>

      <div className="container">
        <div className="faq-section">
          <h3>1. How Long Has Trim Reaper Been in Business?</h3>
          <p>
            The first time we trimmed trees was back in 2016. The first time we
            mastered brush removal was in 2017. Yes, some companies have been
            cutting trees for longer...but nobody has been doing it with our
            level of care and precision for longer.
          </p>
          <p>
            We are not stuck in the old ways of tree service but we&apos;ve
            pioneered newer and better safety techniques with enough experience
            and history to not be &quot;new&quot; anymore.
          </p>

          <a id="faq2"></a>
          <h3>2. Who will come to my house?</h3>
          <p>
            We do a lot of work to make sure every technician is the best we can
            find and train. Our technicians will knock on your door and announce
            their arrival and gather any additional information they should
            know.
          </p>
          <p>
            We love hearing all the positive feedback from customers about how
            they love our employees.
          </p>
          <p>FYI: We love them too!</p>

          <a id="faq3"></a>
          <h3>3. Is There A Guarantee?</h3>
          <p>We guarantee our work for 30 days.</p>
          <p>What does that mean?</p>
          <p>
            That means if there is something we missed we will come back and fix
            it for free within 30 days.
          </p>
          <p>What doesn&apos;t that mean?</p>
          <p>
            That doesn&apos;t include &quot;NEW&quot; growth or debris that
            falls after we leave.
          </p>

          <a id="faq4"></a>
          <h3>4. Do You Accept Credit Cards, Check, Cash?</h3>
          <p>Yes, yes, and yes!</p>
          <p>
            We don&apos;t care how we get paid as long as we get paid. We
            process all payments through our secure software that manages all
            jobs, notes, and customers efficiently.
          </p>
        </div>
      </div>
    </>
  );
}
