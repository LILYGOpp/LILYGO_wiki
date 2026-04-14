// LILYGO Wiki — Load Spark release data + render download widget
(function () {
  function loadWidget() {
    if (!document.getElementById('spark-widget')) return;
    var s = document.createElement('script');
    s.src = '/static/js/spark-latest.js';
    s.onload = function () { renderSparkWidget(); };
    s.onerror = function () {
      var s2 = document.createElement('script');
      s2.src = 'https://lilygo.oss-accelerate.aliyuncs.com/spark-releases/latest/spark-latest.js';
      s2.onload = function () { renderSparkWidget(); };
      document.body.appendChild(s2);
    };
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

    /* inject CSS */
    if (!document.getElementById('spw-css')) {
      var st = document.createElement('style');
      st.id = 'spw-css';
      st.textContent =
        '#spark-widget{font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif!important;line-height:1.5!important}' +
        '#spark-widget *{box-sizing:border-box!important}' +
        '#spark-widget a{text-decoration:none!important}' +
        '#spark-widget table,#spark-widget td,#spark-widget tr{border:none!important;background:none!important;padding:0!important}' +
        '.spw-wrap{border:1px solid #d1fae5!important;border-radius:14px!important;overflow:hidden!important}' +
        /* card */
        '.spw-card{padding:20px 24px!important;display:flex!important;align-items:center!important;justify-content:space-between!important;flex-wrap:wrap!important;gap:16px!important;background:#fff!important;border-bottom:1px solid #d1fae5!important}' +
        '.spw-card-info{display:flex!important;align-items:center!important;gap:12px!important}' +
        '.spw-card-icon{width:38px!important;height:38px!important;border-radius:10px!important;display:flex!important;align-items:center!important;justify-content:center!important;flex-shrink:0!important;background:linear-gradient(135deg,#10b981,#059669)!important;color:#fff!important}' +
        '.spw-card-icon svg{width:20px!important;height:20px!important}' +
        '.spw-card-text{display:block!important}' +
        '.spw-card-title{font-size:16px!important;font-weight:700!important;color:#111827!important;line-height:1.3!important;display:block!important}' +
        '.spw-card-ver{font-size:12px!important;color:#9ca3af!important;margin-top:2px!important;line-height:1.3!important;display:block!important}' +
        '.spw-card-btns{display:flex!important;gap:8px!important;flex-wrap:wrap!important;align-items:center!important}' +
        '.spw-btn-dl{display:inline-flex!important;align-items:center!important;gap:6px!important;padding:10px 22px!important;border-radius:24px!important;text-decoration:none!important;font-size:14px!important;font-weight:600!important;border:none!important;cursor:pointer!important;background:#10b981!important;color:#fff!important;box-shadow:0 2px 8px rgba(16,185,129,.3)!important;transition:all .15s!important;line-height:1.4!important}' +
        '.spw-btn-dl:hover{background:#059669!important;box-shadow:0 4px 14px rgba(5,150,105,.35)!important;transform:translateY(-1px)!important}' +
        '.spw-btn-dl svg{width:16px!important;height:16px!important}' +
        '.spw-btn-tog{font-size:13px!important;font-weight:600!important;cursor:pointer!important;display:inline-flex!important;align-items:center!important;gap:5px!important;line-height:1.4!important;color:#10b981!important;border:1.5px solid #a7f3d0!important;padding:9px 18px!important;border-radius:24px!important;background:#fff!important;transition:all .15s!important}' +
        '.spw-btn-tog:hover{border-color:#10b981!important;background:#ecfdf5!important}' +
        '.spw-btn-tog svg{width:13px!important;height:13px!important;transition:transform .25s!important}' +
        '.spw-btn-tog.open svg{transform:rotate(180deg)!important}' +
        /* expand panel */
        '.spw-panel{max-height:0!important;overflow:hidden!important;transition:max-height .35s cubic-bezier(.4,0,.2,1)!important;background:#ecfdf5!important}' +
        '.spw-panel.open{max-height:800px!important}' +
        '.spw-panel-inner{padding:16px 24px 20px!important}' +
        /* platform label */
        '.spw-plat{font-size:11px!important;font-weight:700!important;text-transform:uppercase!important;letter-spacing:.08em!important;color:#059669!important;margin-bottom:10px!important;display:block!important}' +
        '.spw-plat-group{margin-bottom:16px!important}' +
        '.spw-plat-group:last-child{margin-bottom:0!important}' +
        /* pills */
        '.spw-pills{display:flex!important;flex-wrap:wrap!important;gap:10px!important}' +
        '.spw-pill{display:inline-flex!important;align-items:center!important;gap:8px!important;padding:11px 20px!important;border-radius:28px!important;text-decoration:none!important;font-size:13px!important;font-weight:500!important;white-space:nowrap!important;background:#fff!important;border:1.5px solid #d1fae5!important;color:#374151!important;box-shadow:0 1px 3px rgba(0,0,0,.04)!important;transition:all .2s!important}' +
        '.spw-pill:hover{border-color:#10b981!important;background:#f0fdf9!important;box-shadow:0 4px 14px rgba(16,185,129,.12)!important}' +
        '.spw-pill-size{font-size:11px!important;color:#9ca3af!important;font-weight:400!important}';
      document.head.appendChild(st);
    }

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
