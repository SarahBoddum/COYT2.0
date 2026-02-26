import insta from "../assets/images/insta.png";
import tiktok from "../assets/images/tiktok.png";
import face from "../assets/images/face.png";
import logo from "../assets/images/LogoHvid.png";

export default function Footer() {
  return (
    <div id="Footer">
       <div id="footerIkoner">
            <a href="https://www.instagram.com/coyt.dk/" target="_blank"><img src={insta} alt="instagram ikon"></img></a>
            <a href="https://www.tiktok.com/@coyt.dk?_r=1&_d=secCgYIASAHKAESPgo8TpuqQqHV18oEh2OP7x9UxNviUc6F5rkg%2BzPgSAMbyHjOdAwOIWM1mPUAg1mEunH9zyOA6XT3kNtVX5akGgA%3D&_svg=2&checksum=de71a0e1128e1178709f213d182f5dec3544a6c0aa0fde3be4be1b0a9a2de454&item_author_type=1&sec_uid=MS4wLjABAAAASJK5cxmfNE1clsO4JPHeOrDwV6EtzixVq1riKh5DOBXOzo8k6L6ls05GFzH7k-En&sec_user_id=MS4wLjABAAAASJK5cxmfNE1clsO4JPHeOrDwV6EtzixVq1riKh5DOBXOzo8k6L6ls05GFzH7k-En&share_app_id=1233&share_author_id=7333719127209067553&share_link_id=652383C8-953D-45F0-8778-DE5F9AD3FE4B&share_region=DK&share_scene=1&sharer_language=da&social_share_type=4&source=h5_m&timestamp=1768557385&tt_from=copy&u_code=ecele0gjlk77dd&ug_btm=b8727%2Cb0&user_id=7333719127209067553&utm_campaign=client_share&utm_medium=ios&utm_source=copy" target="_blank"><img src={tiktok} alt="tiktok ikon"></img></a>
            <a href="https://www.facebook.com/coyt.dk" target="_blank"><img src={face} alt="facebook ikon"></img></a>
       </div>
       <img src={logo} alt="COYT logo" id="footerLogo"></img>
    </div>
  );
}