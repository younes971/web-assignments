const target = document.getElementById('target');

const userAgent = navigator.userAgent;
const browserInfo = `Selaimen tiedot: ${userAgent}`;

const platform = navigator.platform;
const osInfo = `Käyttöjärjestelmä: ${platform}`;

const screenSize = `Näytön koko: ${screen.width} x ${screen.height}`;

const availableSize = `Selaimen käytettävissä oleva tila: ${screen.availWidth} x ${screen.availHeight}`;

const now = new Date();
const optionsDate = {year: 'numeric', month: 'long', day: 'numeric'};
const optionsTime = {hour: '2-digit', minute: '2-digit'};
const dateStr = now.toLocaleDateString('fi-FI', optionsDate);
const timeStr = now.toLocaleTimeString('fi-FI', optionsTime);
const dateTimeInfo = `Päivämäärä: ${dateStr}, Kellonaika: ${timeStr}`;

const infos = [browserInfo, osInfo, screenSize, availableSize, dateTimeInfo];

infos.forEach(info => {
  const p = document.createElement('p');
  p.textContent = info;
  target.appendChild(p);
});
