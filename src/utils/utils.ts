import clearDay from "../assets/images-weather/clear-day.png";
import clearNight from "../assets/images-weather/clear-night.png";
import cloudyDay from "../assets/images-weather/cloudy-day.png";
import cloudyNight from "../assets/images-weather/cloudy-night.png";
import rainDay from "../assets/images-weather/rain-day.png";
import rainNight from "../assets/images-weather/rain-night.png";
import snowDay from "../assets/images-weather/snow-day.png";
import snowNight from "../assets/images-weather/snow-night.png";

import icon113 from "../assets/iconsApi/113.png";
import icon116 from "../assets/iconsApi/116.png";
import icon119 from "../assets/iconsApi/119.png";
import icon122 from "../assets/iconsApi/122.png";
import icon143 from "../assets/iconsApi/143.png";
import icon176 from "../assets/iconsApi/176.png";
import icon179 from "../assets/iconsApi/179.png";
import icon182 from "../assets/iconsApi/182.png";
import icon185 from "../assets/iconsApi/185.png";
import icon200 from "../assets/iconsApi/200.png";

import icon227 from "../assets/iconsApi/227.png";
import icon230 from "../assets/iconsApi/230.png";
import icon248 from "../assets/iconsApi/248.png";
import icon260 from "../assets/iconsApi/260.png";
import icon263 from "../assets/iconsApi/263.png";
import icon266 from "../assets/iconsApi/266.png";
import icon281 from "../assets/iconsApi/281.png";
import icon284 from "../assets/iconsApi/284.png";
import icon293 from "../assets/iconsApi/293.png";
import icon296 from "../assets/iconsApi/296.png";
import icon299 from "../assets/iconsApi/299.png";
import icon302 from "../assets/iconsApi/302.png";
import icon305 from "../assets/iconsApi/305.png";
import icon308 from "../assets/iconsApi/308.png";
import icon311 from "../assets/iconsApi/311.png";
import icon314 from "../assets/iconsApi/314.png";
import icon317 from "../assets/iconsApi/317.png";
import icon320 from "../assets/iconsApi/320.png";
import icon323 from "../assets/iconsApi/323.png";
import icon326 from "../assets/iconsApi/326.png";
import icon329 from "../assets/iconsApi/329.png";
import icon332 from "../assets/iconsApi/332.png";
import icon335 from "../assets/iconsApi/335.png";
import icon338 from "../assets/iconsApi/338.png";
import icon350 from "../assets/iconsApi/350.png";
import icon353 from "../assets/iconsApi/353.png";
import icon356 from "../assets/iconsApi/356.png";
import icon359 from "../assets/iconsApi/359.png";
import icon362 from "../assets/iconsApi/362.png";

import icon365 from "../assets/iconsApi/365.png";
import icon368 from "../assets/iconsApi/368.png";
import icon371 from "../assets/iconsApi/371.png";
import icon374 from "../assets/iconsApi/374.png";
import icon377 from "../assets/iconsApi/377.png";
import icon386 from "../assets/iconsApi/386.png";
import icon389 from "../assets/iconsApi/389.png";
import icon392 from "../assets/iconsApi/392.png";
import icon395 from "../assets/iconsApi/395.png";

export const getIconNumber = (code: number) => {
  switch (code) {
    case 1000:
      return icon113;
    case 1003:
      return icon116;
    case 1006:
      return icon119;
    case 1009:
      return icon122;
    case 1030:
      return icon143;
    case 1063:
      return icon176;
    case 1066:
      return icon179;
    case 1069:
      return icon182;
    case 1072:
      return icon185;
    case 1087:
      return icon200;
    case 1114:
      return icon227;
    case 1117:
      return icon230;
    case 1135:
      return icon248;
    case 1147:
      return icon260;
    case 1150:
      return icon263;
    case 1153:
      return icon266;
    case 1168:
      return icon281;
    case 1171:
      return icon284;
    case 1180:
      return icon293;
    case 1183:
      return icon296;
    case 1186:
      return icon299;
    case 1189:
      return icon302;
    case 1192:
      return icon305;
    case 1195:
      return icon308;
    case 1198:
      return icon311;
    case 1201:
      return icon314;
    case 1204:
      return icon317;
    case 1207:
      return icon320;
    case 1210:
      return icon323;
    case 1213:
      return icon326;
    case 1216:
      return icon329;
    case 1219:
      return icon332;
    case 1222:
      return icon335;
    case 1225:
      return icon338;
    case 1237:
      return icon350;
    case 1240:
      return icon353;
    case 1243:
      return icon356;
    case 1246:
      return icon359;
    case 1249:
      return icon362;
    case 1252:
      return icon365;
    case 1255:
      return icon368;
    case 1258:
      return icon371;
    case 1261:
      return icon374;
    case 1264:
      return icon377;
    case 1273:
      return icon386;
    case 1276:
      return icon389;
    case 1279:
      return icon392;
    case 1282:
      return icon395;
    default:
      return icon113;
  }
};

export const getUrlFromIcon = (code: number) => {
  return `/src/assets/iconsApi/${getIconNumber(code)}.png`;
};

export const getBackgroundForTodayInfo = (weather: string, hour: number) => {
  if (hour > 6 && hour < 22) {
    if (weather.toLowerCase().includes("clear")) return clearDay;
    else if (weather.toLowerCase().includes("cloudy")) return cloudyDay;
    else if (weather.toLowerCase().includes("rain")) return rainDay;
    else if (weather.toLowerCase().includes("snow")) return snowDay;
    else return clearDay;
  } else {
    if (weather.toLowerCase().includes("clear")) return clearNight;
    else if (weather.toLowerCase().includes("cloudy")) return cloudyNight;
    else if (weather.toLowerCase().includes("rain")) return rainNight;
    else if (weather.toLowerCase().includes("snow")) return snowNight;
    else return clearNight;
  }
};
