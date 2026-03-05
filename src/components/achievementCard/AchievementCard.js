import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({ cardInfo, isDark }) {

  const openUrlInNewTab = (url) => {
    if (!url) return;
    window.open(url, "_blank").focus();
  };

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>

      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>

        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.subtitle}
        </p>
      </div>

      {cardInfo.footerLink?.length > 0 && (
        <div className="certificate-card-footer">
          {cardInfo.footerLink.map((v, i) => (
            <span
              key={i}
              className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
              onClick={() => openUrlInNewTab(v.url)}
            >
              {v.name}
            </span>
          ))}
        </div>
      )}

    </div>
  );
}