import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Manage Campaigns": "Manage Campaigns",
      "Date": "DATE",
      "CAMPAIGN": "CAMPAIGN",
      "VIEW": "VIEW",
      "ACTIONS": "ACTIONS",
      "No Records Found!": "No Records Found!",
      "Upcoming Campaigns": "Upcoming Campaigns",
      "Live Campaigns": "Live Campaigns",
      "Past Campaigns": "Past Campaigns",
      "Report": "Report",
      "Schedule Again": "Schedule Again",
      "CSV": "CSV",
    }
  },
  ch: {
    translation: {
      "Manage Campaigns": "管理运动",
      "Date": "日期",
      "CAMPAIGN": "运动",
      "VIEW": "视图",
      "ACTIONS": "行动",
      "No Records Found!": "没有找到记录！",
      "Upcoming Campaigns": "即将来临的战役",
      "Live Campaigns": "直播活动",
      "Past Campaigns": "过去的战役",
      "CSV": "匹艾丝人",
      "Report": "報告",
      "Schedule Again": "再次安排",
      "View Pricing": "查看定價",
      "Auto Chess": "國際象棋",
      "Super Jewels Quest": "超級珠寶探索",
      "Mole Slayer": "摩爾殺手",
      "Flow Free": "自由流動",
      "Summores War": "召喚者之戰",
      "Need for Speed": "極品飛車",
      "Garena free Fire": "加雷納自由火",
      "Shadow Fight 3": "影子打架",
      " Days Ahead": " 未來幾天",
      " Days Ago": " 幾天前",
      "Jan": "一月",
      "Feb": "二月",
      "Mar": "遊行",
      "Apr": "四月",
      "May": "可以",
      "Jun": "六月",
      "Jul": "七月",
      "Aug": "八月",
      "Sep": "九月",
      "Oct": "十月",
      "Nov": "十一月",
      "Dec": "十月",
      "Save": "保存",
      "Pricing": "價錢",
      "Close": "關",
      "Week": "週",
      "Month": "月",
      "Months": "月數",
      "Year": "年",
      "Language": "語言"
    }
  },
  ja: {
    translation: {
      "Manage Campaigns": "管理キャンペーン",
      "Date": "日付",
      "CAMPAIGN": "運動",
      "VIEW": "見る",
      "ACTIONS": "行動",
      "No Records Found!": "レコードが見つかりません！",
      "Upcoming Campaigns": "今後のキャンペーン",
      "Live Campaigns": "ライブキャンペーン",
      "Past Campaigns": "過去のキャンペーン",
      "CSV": "匹艾丝人",
      "Report": "報告する",
      "Schedule Again": "再びスケジュール",
      "View Pricing": "価格を表示",
      "Auto Chess": "自動チェス",
      "Super Jewels Quest": "スーパージュエルズクエスト",
      "Mole Slayer": "ほくろスレイヤー",
      "Flow Free": "フローフリー",
      "Summores War": "サモナーズウォー",
      "Need for Speed": "ニード・フォー・スピード",
      "Garena free Fire": "ガレナフリーファイア",
      "Shadow Fight 3": "シャドウファイト3",
      " Days Ahead": " 先日",
      " Days Ago": " 数日前",
      "Jan": "ヤン",
      "Feb": "二月",
      "Mar": "遊行",
      "Apr": "四月",
      "May": "可以",
      "Jun": "六月",
      "Jul": "七月",
      "Aug": "八月",
      "Sep": "九月",
      "Oct": "十月",
      "Nov": "十一月",
      "Dec": "十月",
      "Save": "保存",
      "Pricing": "價錢",
      "Close": "關",
      "Week": "週",
      "Month": "月",
      "Months": "月數",
      "Year": "年",
      "Language": "言語"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;