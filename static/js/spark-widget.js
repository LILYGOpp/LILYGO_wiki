// LILYGO Wiki — Load Spark release data + render download widget
(function () {
  function loadWidget() {
    if (!document.getElementById('spark-widget')) return;
    var s = document.createElement('script');
    s.src = 'https://lilygo.oss-accelerate.aliyuncs.com/spark-releases/latest/spark-latest.js';
    s.onload = function () { renderSparkWidget(); };
    document.body.appendChild(s);
  }

  function renderSparkWidget() {
    var R = window.SPARK_LATEST;
    if (!R) return;
    var host = document.getElementById('spark-widget');
    if (!host) return;

    function sz(b) { return (b / 1048576).toFixed(1) + ' MB'; }

    /* platform detect */
    function detect() {
      var ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf('mac') !== -1) {
        try {
          var c = document.createElement('canvas'), gl = c.getContext('webgl');
          if (gl) { var d = gl.getExtension('WEBGL_debug_renderer_info'); if (d && gl.getParameter(d.UNMASKED_RENDERER_WEBGL).indexOf('Apple') !== -1) return { k: 'macOS-arm64', l: 'macOS (Apple Silicon)' }; }
        } catch (e) {}
        return { k: 'macOS-arm64', l: 'macOS' };
      }
      if (ua.indexOf('win') !== -1) return { k: 'windows-x64-setup', l: 'Windows' };
      if (ua.indexOf('linux') !== -1) return { k: 'linux-x86_64-AppImage', l: 'Linux' };
      return { k: 'windows-x64-setup', l: 'Windows' };
    }

    var plat = detect();
    var dlAsset = R.assets && R.assets[plat.k];
    var dlUrl = dlAsset ? dlAsset.url : 'https://github.com/Xinyuan-LilyGO/LILYGO-Spark/releases';
    var ver = 'v' + R.version;

    var groups = [
      { label: 'macOS', keys: [
        { k: 'macOS-arm64', l: 'Apple Silicon (.dmg)' },
        { k: 'macOS-x64', l: 'Intel (.dmg)' },
        { k: 'macOS-universal', l: 'Universal (.dmg)' }
      ]},
      { label: 'Windows', keys: [
        { k: 'windows-x64-setup', l: 'x64 Installer (.exe)' },
        { k: 'windows-x64-portable', l: 'x64 Portable (.exe)' },
        { k: 'windows-arm64-setup', l: 'ARM64 Installer (.exe)' }
      ]},
      { label: 'Linux', keys: [
        { k: 'linux-x86_64-AppImage', l: 'x86_64 (.AppImage)' },
        { k: 'linux-amd64-deb', l: 'amd64 (.deb)' },
        { k: 'linux-x86_64-rpm', l: 'x86_64 (.rpm)' }
      ]}
    ];

    var dlSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';
    var chevSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
    var boltSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>';

    /* build expand panel */
    var pillsHtml = '';
    for (var g = 0; g < groups.length; g++) {
      pillsHtml += '<div class="spw-plat-group">';
      pillsHtml += '<span class="spw-plat">' + groups[g].label + '</span>';
      pillsHtml += '<div class="spw-pills">';
      for (var i = 0; i < groups[g].keys.length; i++) {
        var ak = groups[g].keys[i], asset = R.assets && R.assets[ak.k];
        if (asset) {
          pillsHtml += '<a class="spw-pill" href="' + asset.url + '">' +
            '<span>' + ak.l + '</span>' +
            '<span class="spw-pill-size">' + sz(asset.size) + '</span></a>';
        }
      }
      pillsHtml += '</div></div>';
    }

    host.innerHTML =
      '<div class="spw-wrap">' +
        '<div class="spw-card">' +
          '<div class="spw-card-info">' +
            '<div class="spw-card-icon">' + boltSvg + '</div>' +
            '<div class="spw-card-text">' +
              '<span class="spw-card-title">LILYGO Spark</span>' +
              '<span class="spw-card-ver">' + ver + ' \u00b7 macOS / Windows / Linux</span>' +
            '</div>' +
          '</div>' +
          '<div class="spw-card-btns">' +
            '<a class="spw-btn-dl" href="' + dlUrl + '">' + dlSvg + ' Download for ' + plat.l + '</a>' +
            '<button class="spw-btn-tog" type="button">All Platforms ' + chevSvg + '</button>' +
          '</div>' +
        '</div>' +
        '<div class="spw-panel"><div class="spw-panel-inner">' + pillsHtml + '</div></div>' +
      '</div>';

    /* bind toggle */
    var tog = host.querySelector('.spw-btn-tog');
    var panel = host.querySelector('.spw-panel');
    tog.addEventListener('click', function () {
      panel.classList.toggle('open');
      tog.classList.toggle('open');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadWidget);
  } else {
    loadWidget();
  }
})();
