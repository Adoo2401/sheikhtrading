import React from "react";

const map = () => {
  return (

    <div classname="map">
      <div classname="google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1739.9646811309788!2d120.08256599790006!3d29.284402676771112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344953cc6b044ee7%3A0x9da641bca4efecac!2sJiangnan%20Area%203!5e0!3m2!1sen!2sus!4v1706180137742!5m2!1sen!2sus" width={"100%"} height={650} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  )
};
export default map;

