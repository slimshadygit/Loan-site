(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{23:()=>{},2389:()=>{},2650:(e,s,i)=>{"use strict";i.d(s,{default:()=>t});var a=i(5155),l=i(2115);function t(){let[e,s]=l.useState(""),[i,t]=(0,l.useState)("Salaried"),r=async e=>{e.preventDefault(),s("Sending....");let i=new FormData(e.target);i.append("access_key","3492ecea-d9c4-421e-9e8f-594fb4c27e51");let a=await fetch("https://api.web3forms.com/submit",{method:"POST",body:i}),l=await a.json();l.success?(s("Form Submitted Successfully"),e.target.reset()):(console.log("Error",l),s(l.message))};return(0,a.jsx)("section",{id:"contact",className:"py-5 bg-overlay-primary-gradient contact-layout2 bg-img pb-0 pt-head-5",style:{background:'url("/images/loan-banner.jpg") center / cover no-repeat'},children:(0,a.jsx)("div",{className:"banner-section container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"banner-container col-lg-7 mb-4 mb-lg-0 align-content-center",children:[(0,a.jsx)("h2",{className:"pb-3 head",children:"Fast, Simple, and Secure Loan Solutions"}),(0,a.jsx)("p",{children:"We understand that securing a loan is an important step towards achieving your financial goals. Whether you're looking for personal loans, home financing, or business funding, our team is here to guide you every step of the way. We are committed to providing clear, transparent information and personalized loan options that best suit your needs. Reach out today, and let us help you navigate your financial journey with confidence and ease."})]}),(0,a.jsx)("div",{className:"col-md-12 col-lg-5",children:(0,a.jsxs)("div",{className:"contact-panel",children:[(0,a.jsx)("div",{className:"text-center",children:(0,a.jsx)("h4",{className:"mb-4 head",children:"Get in touch"})}),(0,a.jsx)("form",{method:"post",onSubmit:r,noValidate:!0,children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-md-6 mb-3 form-group-icon",children:[(0,a.jsx)("i",{className:"bi bi-person"}),(0,a.jsx)("input",{type:"text",className:"form-control",name:"Name",placeholder:"Name",required:!0})]}),(0,a.jsxs)("div",{className:"col-md-6 mb-3 form-group-icon",children:[(0,a.jsx)("i",{className:"bi bi-telephone"}),(0,a.jsx)("input",{type:"text",pattern:"\\d{0,9}",className:"form-control",name:"Contact Number",placeholder:"Phone"})]}),(0,a.jsxs)("div",{className:"col-md-12 mb-3 form-group-icon",children:[(0,a.jsx)("i",{className:"bi bi-envelope"}),(0,a.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",name:"Contact Email",required:!0})]}),(0,a.jsxs)("div",{className:"col-md-6 mb-3 form-group-icon",children:[(0,a.jsx)("i",{className:"bi bi-geo-alt"}),(0,a.jsx)("input",{type:"text",className:"form-control",placeholder:"Company",name:"Company",required:!0})]}),(0,a.jsxs)("div",{className:"col-md-6 mb-3 form-group-icon",children:[(0,a.jsx)("i",{className:"bi bi-geo-alt"}),(0,a.jsx)("input",{type:"text",className:"form-control",placeholder:"city",name:"City",required:!0})]}),(0,a.jsxs)("div",{className:"col-md-12 mb-3 row job-type",children:[(0,a.jsx)("div",{className:"radiobtn col-md-5 col-12 p-0",children:(0,a.jsxs)("label",{className:"col-md-12 col-12 ".concat("Salaried"===i?"isChecked":""),children:[(0,a.jsx)("input",{type:"radio",name:"About Income",value:"Salaried",checked:"Salaried"===i,onChange:()=>t("Salaried")}),"Salaried"]})}),(0,a.jsx)("div",{className:"radiobtn col-md-6 col-12 p-0",children:(0,a.jsxs)("label",{className:"col-md-12 col-12 ".concat("Self Employed"===i?"isChecked":""),children:[(0,a.jsx)("input",{type:"radio",name:"About Income",value:"Self Employed",checked:"Self Employed"===i,onChange:()=>t("Self Employed")}),"Self Employed"]})})]}),(0,a.jsx)("div",{className:"col-12",children:(0,a.jsx)("button",{type:"submit",className:"button btn btn-secondary w-100",children:"Submit Request"})})]})})]})})]})})})}i(23)},4419:(e,s,i)=>{"use strict";i.d(s,{default:()=>r});var a=i(5155);i(2115),i(7670);var l=i(6766),t=i(1996);function r(){return(0,a.jsxs)("section",{id:"team",className:"team section",children:[(0,a.jsxs)("div",{className:"container section-title text-center","data-aos":"fade-up",children:[(0,a.jsx)("h1",{className:"head",children:"Our team"}),(0,a.jsx)("p",{})]}),(0,a.jsx)("div",{className:"container testimonials-container",children:(0,a.jsx)("div",{className:"row gy-4",children:(0,a.jsx)(t.A,{dots:!1,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,arrows:!1,pauseOnHover:!0,responsive:[{breakpoint:900,settings:{slidesToShow:1,slidesToScroll:1,autoplay:!0}}],children:Array.from({length:4},(e,s)=>(0,a.jsx)("div",{className:"col-lg-6","data-aos":"fade-up","data-aos-delay":"300",children:(0,a.jsxs)("div",{className:"team-member d-flex align-items-start",children:[(0,a.jsx)("div",{className:"pic",children:(0,a.jsx)(l.default,{src:"/images/person-m-7.jpg",className:"img-fluid",alt:"Next.js logo",width:150,height:150,priority:!0})}),(0,a.jsxs)("div",{className:"member-info",children:[(0,a.jsx)("h4",{children:"William Anderson"}),(0,a.jsx)("span",{children:"CTO"}),(0,a.jsx)("p",{children:"Capable of doing tasks"}),(0,a.jsxs)("div",{className:"custom-social-icon",children:[(0,a.jsx)("a",{href:"#",target:"_blank",children:(0,a.jsx)("i",{className:"far fa-envelope"})}),(0,a.jsx)("a",{href:"#",target:"_blank",children:(0,a.jsx)("i",{className:"fab fa-instagram"})})]})]})]})},s))})})})]})}i(6298),i(4202)},6116:()=>{},7670:()=>{},8011:(e,s,i)=>{"use strict";i.d(s,{default:()=>r});var a=i(5155);i(2115);var l=i(1996);i(6298),i(4202);var t=i(6766);function r(){return(0,a.jsxs)("section",{id:"testimonials",className:"testimonials section",children:[(0,a.jsxs)("div",{className:"container section-title text-center","data-aos":"fade-up",children:[(0,a.jsx)("h1",{className:"head",children:"Testimonials"}),(0,a.jsx)("p",{})]}),(0,a.jsx)("div",{className:"container","data-aos":"fade-up","data-aos-delay":"100",children:(0,a.jsxs)("div",{className:"swiper init-swiper",children:[(0,a.jsx)("div",{className:"swiper-wrapper",children:(0,a.jsxs)(l.A,{dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,arrows:!1,pauseOnHover:!0,children:[(0,a.jsx)("div",{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"testimonial-item",children:[(0,a.jsx)(t.default,{src:"/images/person-m-7.jpg",className:"testimonial-img",alt:"Next.js logo",width:150,height:150,priority:!0}),(0,a.jsx)("h3",{children:"Saul Goodman"}),(0,a.jsx)("h4",{children:"Ceo & Founder"}),(0,a.jsxs)("div",{className:"stars",children:[(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("i",{className:"bi bi-quote quote-icon-left"}),(0,a.jsx)("span",{children:"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."}),(0,a.jsx)("i",{className:"bi bi-quote quote-icon-right"})]})]})}),(0,a.jsx)("div",{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"testimonial-item",children:[(0,a.jsx)(t.default,{src:"/images/person-m-7.jpg",className:"testimonial-img",alt:"Next.js logo",width:150,height:150,priority:!0}),(0,a.jsx)("h3",{children:"Sara Wilsson"}),(0,a.jsx)("h4",{children:"Designer"}),(0,a.jsxs)("div",{className:"stars",children:[(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("i",{className:"bi bi-quote quote-icon-left"}),(0,a.jsx)("span",{children:"Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."}),(0,a.jsx)("i",{className:"bi bi-quote quote-icon-right"})]})]})}),(0,a.jsx)("div",{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"testimonial-item",children:[(0,a.jsx)(t.default,{src:"/images/person-m-7.jpg",className:"testimonial-img",alt:"Next.js logo",width:150,height:150,priority:!0}),(0,a.jsx)("h3",{children:"Jena Karlis"}),(0,a.jsx)("h4",{children:"Store Owner"}),(0,a.jsxs)("div",{className:"stars",children:[(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("i",{className:"bi bi-quote quote-icon-left"}),(0,a.jsx)("span",{children:"Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."}),(0,a.jsx)("i",{className:"bi bi-quote quote-icon-right"})]})]})}),(0,a.jsx)("div",{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"testimonial-item",children:[(0,a.jsx)(t.default,{src:"/images/person-m-7.jpg",className:"testimonial-img",alt:"Next.js logo",width:150,height:150,priority:!0}),(0,a.jsx)("h3",{children:"Matt Brandon"}),(0,a.jsx)("h4",{children:"Freelancer"}),(0,a.jsxs)("div",{className:"stars",children:[(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("i",{className:"bi bi-quote quote-icon-left"}),(0,a.jsx)("span",{children:"Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."}),(0,a.jsx)("i",{className:"bi bi-quote quote-icon-right"})]})]})}),(0,a.jsx)("div",{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"testimonial-item",children:[(0,a.jsx)(t.default,{src:"/images/person-m-7.jpg",className:"testimonial-img",alt:"Next.js logo",width:150,height:150,priority:!0}),(0,a.jsx)("h3",{children:"John Larson"}),(0,a.jsx)("h4",{children:"Entrepreneur"}),(0,a.jsxs)("div",{className:"stars",children:[(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("i",{className:"bi bi-quote quote-icon-left"}),(0,a.jsx)("span",{children:"Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."}),(0,a.jsx)("i",{className:"bi bi-quote quote-icon-right"})]})]})})]})}),(0,a.jsx)("div",{className:"swiper-pagination"})]})})]})}i(6116)},8824:(e,s,i)=>{"use strict";i.d(s,{default:()=>r});var a=i(5155);i(2389);var l=i(6766),t=i(1996);function r(e){return(0,a.jsxs)("section",{id:"services",className:"services section light-background",children:[(0,a.jsxs)("div",{className:"section-title text-center","data-aos":"fade-up",children:[(0,a.jsx)("h1",{className:"head",children:"Services"}),(0,a.jsx)("p",{})]}),(0,a.jsx)("div",{className:"row gy-4",children:(0,a.jsx)(t.A,{dots:!1,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,autoplay:!1,autoplaySpeed:2e3,arrows:!1,pauseOnHover:!0,responsive:[{breakpoint:1e3,settings:{slidesToShow:3,slidesToScroll:1,autoplay:!0}},{breakpoint:750,settings:{slidesToShow:2,slidesToScroll:1,autoplay:!0}},{breakpoint:551,settings:{slidesToShow:1,slidesToScroll:1,autoplay:!0}}],children:Object.keys(e.loans).map(s=>{let i=e.loans[s];if((null==i?void 0:i.services)!=null){var t,r,n,o,c;return(0,a.jsx)("div",{className:"p-1","data-aos":"fade-up","data-aos-delay":"100",children:(0,a.jsxs)("div",{className:"card service-item position-relative",children:[(0,a.jsx)("div",{className:"icon",children:(0,a.jsx)(l.default,{src:null==i?void 0:null===(t=i.services)||void 0===t?void 0:t.image,alt:"Home Loan",width:60,height:60,priority:!0})}),(0,a.jsx)("h4",{children:(0,a.jsx)("a",{href:"/home-loan",className:"stretched-link",children:null==i?void 0:null===(r=i.services)||void 0===r?void 0:r.loanname})}),(0,a.jsx)("p",{children:(null==i?void 0:null===(n=i.services)||void 0===n?void 0:n.description.length)>100?(null==i?void 0:null===(o=i.services)||void 0===o?void 0:o.description.slice(0,100))+"...":null==i?void 0:null===(c=i.services)||void 0===c?void 0:c.description})]})},s)}return null})})})]})}i(6298),i(4202)},8883:(e,s,i)=>{Promise.resolve().then(i.bind(i,2650)),Promise.resolve().then(i.bind(i,8011)),Promise.resolve().then(i.bind(i,8824)),Promise.resolve().then(i.bind(i,4419))}},e=>{var s=s=>e(e.s=s);e.O(0,[759,315,441,684,358],()=>s(8883)),_N_E=e.O()}]);