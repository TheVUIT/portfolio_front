import TONY_LOGO from "../assets/images/logo.png";
import BANNER_IMAGE from "../assets/images/banner-image.png";
import CONTACT_PROFILE from "../assets/images/contact-profile.png";
import CONTACT_PROFILE_BACKGROUND from "../assets/images/contact-profile-background.png";
import SERVICE_1_FACE from "../assets/images/services/0003.png";
import SERVICE_2_BACK from "../assets/images/services/0004.png";
import SERVICE_3_LEFT from "../assets/images/services/0005.png";
import SERVICE_4_RIGHT from "../assets/images/services/0006.png";
import SERVICE_5_TOP from "../assets/images/services/0001.png";
import SERVICE_6_BOTTOM from "../assets/images/services/0002.png";
import SERVICE_7_LEFT_FRONT from "../assets/images/services/0007.png";
import SERVICE_8_RIGHT_FRONT from "../assets/images/services/0008.png";
import SERVICE_9_LEFT_BACK from "../assets/images/services/0009.png";
import SERVICE_10_RIGHT_BACK from "../assets/images/services/0010.png";
import SERVICE_11_LEFT_FRONT_TOP from "../assets/images/services/0011.png";
import SERVICE_12_RIGHT_FRONT_TOP from "../assets/images/services/0012.png";
import SERVICE_13_LEFT_FRONT_BOTTOM from "../assets/images/services/0013.png";
import SERVICE_14_RIGHT_FRONT_BOTTOM from "../assets/images/services/0014.png";
import SERVICE_15_LEFT_BACK_TOP from "../assets/images/services/0017.png";
import SERVICE_16_RIGHT_BACK_TOP from "../assets/images/services/0018.png";
import SERVICE_17_LEFT_BACK_BOTTOM from "../assets/images/services/0015.png";
import SERVICE_18_RIGHT_BACK_BOTTOM from "../assets/images/services/0016.png";
import SERVICE_19_LEFT_FRONT_GRAY from "../assets/images/services/B_G1.png";
import SERVICE_20_RIGHT_FRONT_GRAY from "../assets/images/services/B_G2.png";

import SERVICE_FIRST_01 from "../assets/images/services/B_W_G1.png";
import SERVICE_FIRST_02 from "../assets/images/services/B_W_G2.png";
import SERVICE_SECOND_A from "../assets/images/services/C2.png";
import SERVICE_SECOND_B from "../assets/images/services/C3.png";

import GRID1_PRINCIPAL from "../assets/images/home-grid-section/grid1-principal.png";
import GRID1_SECOND from "../assets/images/home-grid-section/grid1-second.png";
import GRID2_PRINCIPAL from "../assets/images/home-grid-section/grid2-principal.png";
import GRID2_SECOND from "../assets/images/home-grid-section/grid2-second.png";

import BANNER_IMAGE_1 from "../assets/images/banner/banner-image-1.png";
import BANNER_IMAGE_2 from "../assets/images/banner/banner-image-2.png";
import BANNER_IMAGE_3 from "../assets/images/banner/banner-image-3.png";
import BANNER_IMAGE_4 from "../assets/images/banner/banner-image-4.png";
import BANNER_IMAGE_5 from "../assets/images/banner/banner-image-5.png";
import BANNER_IMAGE_6 from "../assets/images/banner/banner-image-6.png";
import BANNER_IMAGE_7 from "../assets/images/banner/banner-image-7.png";
import BANNER_IMAGE_8 from "../assets/images/banner/banner-image-8.png";

import BANNER_IMAGE_1_DETAIL_1 from "../assets/images/project-detail/banner-image-1-detail-1.png"
import BANNER_IMAGE_1_DETAIL_2 from "../assets/images/project-detail/banner-image-1-detail-2.png"



const imagesPack = {
  TONY_LOGO,
  BANNER_IMAGE,
  banner: [
    {id: 1, src : BANNER_IMAGE_1}, 
    {id: 2, src : BANNER_IMAGE_2}, 
    {id: 3, src : BANNER_IMAGE_3}, 
    {id: 4, src : BANNER_IMAGE_4},
    {id: 5, src : BANNER_IMAGE_5},
    {id: 6, src : BANNER_IMAGE_6},
    {id: 7, src : BANNER_IMAGE_7},
    {id: 8, src : BANNER_IMAGE_8},
  ],
  CONTACT_PROFILE,
  CONTACT_PROFILE_BACKGROUND,
  service: [
    { src: SERVICE_1_FACE, label: "1. Face" },
    { src: SERVICE_2_BACK, label: "2. Back" },
    { src: SERVICE_3_LEFT, label: "3. Left" },
    { src: SERVICE_4_RIGHT, label: "4. Right" },
    { src: SERVICE_5_TOP, label: "5. Top" },
    { src: SERVICE_6_BOTTOM, label: "6. Bottom" },
    { src: SERVICE_7_LEFT_FRONT, label: "7. Left Front" },
    { src: SERVICE_8_RIGHT_FRONT, label: "8. Right Front" },
    { src: SERVICE_9_LEFT_BACK, label: "9. Left Back" },
    { src: SERVICE_10_RIGHT_BACK, label: "10. Right Back" },
    { src: SERVICE_11_LEFT_FRONT_TOP, label: "11. Left Front Top" },
    { src: SERVICE_12_RIGHT_FRONT_TOP, label: "12. Right Front Top" },
    { src: SERVICE_13_LEFT_FRONT_BOTTOM, label: "13. Left Front Bottom" },
    { src: SERVICE_14_RIGHT_FRONT_BOTTOM, label: "14. Right Front Bottom" },
    { src: SERVICE_15_LEFT_BACK_TOP, label: "15. Left Back Top" },
    { src: SERVICE_16_RIGHT_BACK_TOP, label: "16. Right Back Top" },
    { src: SERVICE_17_LEFT_BACK_BOTTOM, label: "17. Left Back Bottom" },
    { src: SERVICE_18_RIGHT_BACK_BOTTOM, label: "18. Right Back Bottom" },
    { src: SERVICE_19_LEFT_FRONT_GRAY, label: "19. Left Front Gray" },
    { src: SERVICE_20_RIGHT_FRONT_GRAY, label: "20. Right Front Gray" },
  ],
  service_png_first: [
    { src: SERVICE_FIRST_01, label: "A" },
    { src: SERVICE_FIRST_02, label: "B" },
  ],
  service_png_second: [
    { src: SERVICE_SECOND_A, label: "01" },
    { src: SERVICE_SECOND_B, label: "02" },
  ],
  home_grid: [
    {
      id: 1,
      imageUrl1: GRID1_PRINCIPAL,
      imageUrl2: GRID1_SECOND,
    },
    {
      id: 2,
      imageUrl1: GRID1_PRINCIPAL,
      imageUrl2: GRID1_SECOND,
    },
    {
      id: 3,
      imageUrl1: GRID2_PRINCIPAL,
      imageUrl2: GRID2_SECOND,
    },
  ],
};



const banner_project = [
  {id: 1, src_detail1: BANNER_IMAGE_1_DETAIL_1 , src_detail2: BANNER_IMAGE_1_DETAIL_2 },
  {id: 2, src_detail1: BANNER_IMAGE_1_DETAIL_1 , src_detail2: BANNER_IMAGE_1_DETAIL_2 },
]



const banner_project2 = [
  { id: 1, src_detail: [BANNER_IMAGE_1_DETAIL_1, BANNER_IMAGE_1_DETAIL_2] },
  { id: 2, src_detail: [BANNER_IMAGE_1_DETAIL_1, BANNER_IMAGE_1_DETAIL_2] },
];


// const getProjectDetail = (id) => {
//   const projectBanner = banner_project.find(banner => banner.id === parse(id))

//   if(projectBanner)
// }



const getProjectDetails = (id) => {
  const projectBanner = banner_project.find(banner => banner.id === parseInt(id));

  if (projectBanner) {
    const details = Object.keys(projectBanner)
      .filter(key => key.startsWith('src_detail'))
      .map(key => projectBanner[key]);

    return {
      ...projectBanner,
      details,
      bannerImage: imagesPack.banner.find(b => b.id === projectBanner.id),
    };
  }
  return null;
};


export { imagesPack, banner_project, getProjectDetails };





// const getProjectDetails = (id) => {
//   const projectBanner = banner_project.find(banner => banner.id === parseInt(id));
  
//   if (projectBanner) {
//     return {
//       ...projectBanner,
//       bannerImage: imagesPack.banner.find(b => b.id === projectBanner.id),
//     };
//   }
//   return null;
// }
