/* KulinerBunta.id Core JavaScript Application — Production Build v1.0.1 (WO-HOTFIX-001 GitHub Pages Normalized) */

document.addEventListener('DOMContentLoaded', () => {
  console.log('[KulinerBunta.id] GitHub Pages Production Engine v1.0.1 initialized.');
  
  // Register Service Worker for PWA Offline Capability (Relative Scope)
  initServiceWorker();

  // Initialize UI Event Handlers & Security Guards
  initUIHandlers();

  // Monitor Network Connectivity Status
  initNetworkMonitor();

  // Restore & Render Current User Session
  renderUserSessionUI();

  // Update Shopping Cart UI
  updateCartUI();
});

/* Security & Input Sanitization Utility (XSS Prevention) */
function sanitizeHTML(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[&<>"']/g, (match) => {
    const escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return escapeMap[match];
  });
}

function validatePhoneOrEmail(input) {
  if (!input || typeof input !== 'string') return false;
  const trimmed = input.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(\+62|62|0)[0-9]{8,13}$/;
  return emailRegex.test(trimmed) || phoneRegex.test(trimmed);
}

/* Service Worker Registration (GitHub Pages Subfolder Relative Scope Compatible) */
function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const isSubfolder = window.location.pathname.includes('/app-');
      const swPath = isSubfolder ? '../sw.js' : './sw.js';
      const scopePath = isSubfolder ? '../' : './';
      
      navigator.serviceWorker.register(swPath, { scope: scopePath })
        .then((reg) => {
          console.log('[ServiceWorker] Active & Ready:', reg.scope);
        })
        .catch((err) => {
          console.warn('[ServiceWorker] Registration notice:', err);
        });
    });
  }
}

/* Auth State Storage & Session Management Foundation (SP-002) */
const AUTH_KEY = 'kulinerbunta_auth_session';

function getSession() {
  try {
    const data = localStorage.getItem(AUTH_KEY) || sessionStorage.getItem(AUTH_KEY);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('[Session Error]', e);
    return null;
  }
}

function setSession(sessionData, remember = true) {
  try {
    const json = JSON.stringify(sessionData);
    if (remember) {
      localStorage.setItem(AUTH_KEY, json);
    } else {
      sessionStorage.setItem(AUTH_KEY, json);
    }
    logActivity('LOGIN', sessionData.name, 'AUTHENTICATION', `User logged in as ${sessionData.roleName}`);
    renderUserSessionUI();
  } catch (e) {
    showToast('Gagal menyimpan sesi. Kuota memori penyimpanan penuh.', 'warning');
  }
}

function clearSession() {
  const sess = getSession();
  if (sess) {
    logActivity('LOGOUT', sess.name, 'AUTHENTICATION', 'User logged out');
  }
  localStorage.removeItem(AUTH_KEY);
  sessionStorage.removeItem(AUTH_KEY);
  renderUserSessionUI();
}

/* Audit Activity Logger Engine (SP-008 & SP-009) */
const AUDIT_LOG_KEY = 'kulinerbunta_audit_activity_logs';

function getAuditLogs() {
  try {
    const data = localStorage.getItem(AUDIT_LOG_KEY);
    if (!data) {
      const seedLogs = [
        { id: 'log-1', timestamp: new Date().toISOString(), action: 'LOGIN', actor: 'SYSTEM_ADMIN', category: 'AUTHENTICATION', details: 'Initial System Admin Session' },
        { id: 'log-2', timestamp: new Date().toISOString(), action: 'SETTINGS_UPDATED', actor: 'SYSTEM_ADMIN', category: 'SYSTEM_CONFIG', details: 'Delivery Fee set to Rp 5.000' }
      ];
      localStorage.setItem(AUDIT_LOG_KEY, JSON.stringify(seedLogs));
      return seedLogs;
    }
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

function logActivity(action, actor, category, details) {
  try {
    let logs = getAuditLogs();
    const newLog = {
      id: 'log-' + Date.now(),
      timestamp: new Date().toISOString(),
      action: sanitizeHTML(action),
      actor: sanitizeHTML(actor || 'ANONYMOUS'),
      category: sanitizeHTML(category),
      details: sanitizeHTML(details)
    };
    logs.unshift(newLog);
    if (logs.length > 200) logs = logs.slice(0, 200);
    localStorage.setItem(AUDIT_LOG_KEY, JSON.stringify(logs));
    if (typeof renderAdminAuditLogs === 'function') renderAdminAuditLogs();
  } catch (e) {
    console.warn('[Audit Log Error]', e);
  }
}

/* Merchant Catalog CRUD State Store (SP-003) */
const CATALOG_KEY = 'kulinerbunta_merchant_catalog';

const DEFAULT_CATALOG = [
  {
    id: 'item-101',
    name: 'Nasi Goreng Cakalang Asap Bunta',
    merchant: 'Dapur Kuliner Bunta',
    category: 'Makanan Berat',
    price: 25000,
    description: 'Nasi goreng kaya rempah khas pesisir Bunta dengan suwiran ikan cakalang asap pilihan.',
    available: true,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'item-102',
    name: 'Kue Cox & Lalampa Bunta (Porsi 5 Pcs)',
    merchant: 'Warung Camilan Lalampa',
    category: 'Camilan Khas Bunta',
    price: 15000,
    description: 'Camilan ketan berisi abon ikan gurih dibungkus daun pisang dibakar harum.',
    available: true,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'item-103',
    name: 'Es Saraba Rempah Bunta',
    merchant: 'Kedai Saraba Bunta',
    category: 'Minuman',
    price: 10000,
    description: 'Minuman jahe hangat khas dengan perpaduan santan, gula merah, dan kuning telur pilihan.',
    available: true,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'item-104',
    name: 'Kuah Asam Ikan Laut Bunta',
    merchant: 'Dapur Kuliner Bunta',
    category: 'Makanan Berat',
    price: 30000,
    description: 'Sup ikan segar kuah bening asam pedas gurih khas Teluk Tomini Bunta.',
    available: true,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80'
  }
];

function getMerchantCatalog() {
  try {
    const data = localStorage.getItem(CATALOG_KEY);
    if (!data) {
      localStorage.setItem(CATALOG_KEY, JSON.stringify(DEFAULT_CATALOG));
      return DEFAULT_CATALOG;
    }
    return JSON.parse(data);
  } catch (e) {
    return DEFAULT_CATALOG;
  }
}

function saveMerchantCatalog(catalogArray) {
  try {
    localStorage.setItem(CATALOG_KEY, JSON.stringify(catalogArray));
    logActivity('MERCHANT_CATALOG_UPDATED', getSession()?.name || 'ADMIN', 'CATALOG', 'Updated catalog menu items');
    if (typeof renderMerchantCatalog === 'function') renderMerchantCatalog();
    if (typeof renderConsumerCatalog === 'function') renderConsumerCatalog();
  } catch (e) {
    showToast('Gagal menyimpan katalog. Kuota penyimpanan penuh.', 'warning');
  }
}

/* Local Favorites Storage Manager (SP-004) */
const FAV_KEY = 'kulinerbunta_user_favorites';

function getLocalFavorites() {
  try {
    const data = localStorage.getItem(FAV_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function toggleLocalFavorite(itemId) {
  let favs = getLocalFavorites();
  const exists = favs.includes(itemId);

  if (exists) {
    favs = favs.filter(id => id !== itemId);
    showToast('Menu dihapus dari daftar favorit Anda.', 'info');
  } else {
    favs.push(itemId);
    showToast('Menu berhasil ditambahkan ke daftar favorit!', 'success');
  }

  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  updateFavBadgeCount();

  if (typeof renderConsumerCatalog === 'function') {
    renderConsumerCatalog();
  }
}

function updateFavBadgeCount() {
  const badge = document.getElementById('fav-count-badge');
  if (badge) {
    const favs = getLocalFavorites();
    badge.textContent = favs.length;
  }
}

/* Shopping Cart Engine (SP-005) */
const CART_KEY = 'kulinerbunta_shopping_cart';

function getCart() {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cartItems) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
    updateCartUI();
  } catch (e) {
    showToast('Gagal memperbarui keranjang.', 'warning');
  }
}

function addToCart(itemId) {
  const catalog = getMerchantCatalog();
  const item = catalog.find(i => i.id === itemId);
  if (!item) return;

  let cart = getCart();
  const existing = cart.find(c => c.id === itemId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      merchant: item.merchant || 'Dapur Kuliner Bunta',
      price: item.price,
      quantity: 1,
      image: item.image
    });
  }

  saveCart(cart);
  showToast(`1 Porsi ${sanitizeHTML(item.name)} berhasil ditambahkan ke keranjang!`, 'success');
}

function updateCartQuantity(itemId, delta) {
  let cart = getCart();
  cart = cart.map(item => {
    if (item.id === itemId) {
      const newQty = item.quantity + delta;
      return newQty > 0 ? { ...item, quantity: newQty } : null;
    }
    return item;
  }).filter(Boolean);

  saveCart(cart);
}

function removeCartItem(itemId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== itemId);
  saveCart(cart);
  showToast('Item hidangan dihapus dari keranjang.', 'info');
}

function clearCartItems() {
  saveCart([]);
  showToast('Keranjang belanja telah dikosongkan.', 'info');
}

function updateCartUI() {
  const cart = getCart();
  const badge = document.getElementById('cart-badge');
  const floatingBar = document.getElementById('floating-cart-bar');
  const floatingCount = document.getElementById('floating-cart-count');
  const floatingTotal = document.getElementById('floating-cart-total');

  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (badge) badge.textContent = totalQty;

  if (floatingBar) {
    if (totalQty > 0) {
      floatingBar.classList.remove('hidden');
      if (floatingCount) floatingCount.textContent = `${totalQty} Porsi Hidangan`;
      if (floatingTotal) floatingTotal.textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;
    } else {
      floatingBar.classList.add('hidden');
    }
  }

  renderCartDrawerItems(cart, totalQty, totalPrice);
}

function renderCartDrawerItems(cart, totalQty, totalPrice) {
  const container = document.getElementById('cart-drawer-items');
  const emptyView = document.getElementById('cart-empty-view');
  const footerView = document.getElementById('cart-drawer-footer');
  const qtyEl = document.getElementById('cart-summary-qty');
  const subtotalEl = document.getElementById('cart-summary-subtotal');

  if (!container) return;

  if (qtyEl) qtyEl.textContent = `${totalQty} Porsi`;
  if (subtotalEl) subtotalEl.textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;

  if (cart.length === 0) {
    container.innerHTML = '';
    if (emptyView) emptyView.classList.remove('hidden');
    if (footerView) footerView.classList.add('hidden');
    return;
  } else {
    if (emptyView) emptyView.classList.add('hidden');
    if (footerView) footerView.classList.remove('hidden');
  }

  const grouped = {};
  cart.forEach(item => {
    const m = item.merchant || 'Dapur Kuliner Bunta';
    if (!grouped[m]) grouped[m] = [];
    grouped[m].push(item);
  });

  container.innerHTML = Object.keys(grouped).map(merchantName => `
    <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
      <div class="flex items-center gap-1.5 text-xs font-extrabold text-bunta-gold border-b border-slate-800 pb-2">
        <i data-lucide="store" class="w-4 h-4"></i>
        <span>${sanitizeHTML(merchantName)}</span>
      </div>

      <div class="space-y-3">
        ${grouped[merchantName].map(item => `
          <div class="flex items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-3 flex-grow">
              <img src="${sanitizeHTML(item.image) || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80'}" class="w-12 h-12 rounded-xl object-cover border border-slate-700">
              <div>
                <h5 class="font-extrabold text-white leading-tight">${sanitizeHTML(item.name)}</h5>
                <span class="text-bunta-gold font-bold">Rp ${Number(item.price).toLocaleString('id-ID')}</span>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <div class="flex items-center bg-slate-950 border border-slate-700 rounded-xl px-1 py-0.5">
                <button onclick="updateCartQuantity('${item.id}', -1)" class="w-6 h-6 flex items-center justify-center text-slate-300 hover:text-white font-black">-</button>
                <span class="w-6 text-center font-extrabold text-white text-xs">${item.quantity}</span>
                <button onclick="updateCartQuantity('${item.id}', 1)" class="w-6 h-6 flex items-center justify-center text-slate-300 hover:text-white font-black">+</button>
              </div>
              <button onclick="removeCartItem('${item.id}')" title="Hapus Item" class="p-1.5 text-slate-500 hover:text-red-400">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function openCartDrawer() {
  const modal = document.getElementById('cart-drawer-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    updateCartUI();
  }
}

function closeCartDrawer() {
  const modal = document.getElementById('cart-drawer-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

/* Operational Fulfillment Lifecycle Engine (SP-007) */
const ORDERS_KEY = 'kulinerbunta_confirmed_orders';

function getOrdersHistory() {
  try {
    const data = localStorage.getItem(ORDERS_KEY);
    if (!data) {
      const seedOrder = [{
        orderId: 'ORD-20260801-1001',
        timestamp: new Date().toISOString(),
        receiver: 'Djamaludin Musa (08123456789)',
        address: 'Jl. Trans Sulawesi Desa Bunta',
        paymentMethod: 'QRIS',
        items: [DEFAULT_CATALOG[0]],
        subtotal: 25000,
        deliveryFee: 5000,
        serviceFee: 1000,
        finalTotal: 31000,
        status: 'DIPROSES'
      }];
      localStorage.setItem(ORDERS_KEY, JSON.stringify(seedOrder));
      return seedOrder;
    }
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

function saveConfirmedOrder(orderObj) {
  let orders = getOrdersHistory();
  orders.unshift(orderObj);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  logActivity('ORDER_CREATED', orderObj.receiver, 'COMMERCE', `Created order ${orderObj.orderId}`);
  refreshFulfillmentViews();
}

function updateOrderStatus(orderId, newStatus, messageNote) {
  let orders = getOrdersHistory();
  orders = orders.map(ord => {
    if (ord.orderId === orderId) {
      showToast(`Status Pesanan ${orderId}: ${newStatus}`, 'success');
      logActivity(`ORDER_${newStatus}`, getSession()?.name || 'SYSTEM', 'OPERATIONS', `Order ${orderId} changed to ${newStatus}`);
      return { ...ord, status: newStatus, lastUpdate: new Date().toISOString() };
    }
    return ord;
  });
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  refreshFulfillmentViews();
}

function refreshFulfillmentViews() {
  if (typeof renderMerchantOrders === 'function') renderMerchantOrders();
  if (typeof renderCourierQueue === 'function') renderCourierQueue();
  if (typeof renderOrderHistory === 'function') renderOrderHistory();
  if (typeof renderAdminDashboard === 'function') renderAdminDashboard();
  if (typeof renderAnalyticsDashboard === 'function') renderAnalyticsDashboard();
}

/* Analytics & Data Export Engine (SP-009) */
function renderAnalyticsDashboard() {
  const orders = getOrdersHistory();
  const completedOrders = orders.filter(o => o.status === 'SELESAI');

  const totalRevenue = completedOrders.reduce((sum, o) => sum + o.finalTotal, 0);
  const avgOrderVal = completedOrders.length > 0 ? Math.round(totalRevenue / completedOrders.length) : 0;
  const portionsSold = completedOrders.reduce((sum, o) => sum + o.items.reduce((s, i) => s + i.quantity, 0), 0);

  if (document.getElementById('analytics-total-revenue')) document.getElementById('analytics-total-revenue').textContent = `Rp ${totalRevenue.toLocaleString('id-ID')}`;
  if (document.getElementById('analytics-avg-order')) document.getElementById('analytics-avg-order').textContent = `Rp ${avgOrderVal.toLocaleString('id-ID')}`;
  if (document.getElementById('analytics-portions-sold')) document.getElementById('analytics-portions-sold').textContent = `${portionsSold} Porsi`;
}

function exportCSVData(reportType = 'orders') {
  const orders = getOrdersHistory();
  let csvContent = "data:text/csv;charset=utf-8,Order ID,Date,Receiver,Payment Method,Subtotal,Delivery Fee,Service Fee,Total,Status\n";

  orders.forEach(o => {
    const row = `${o.orderId},${o.timestamp},"${sanitizeHTML(o.receiver)}",${o.paymentMethod},${o.subtotal},${o.deliveryFee},${o.serviceFee},${o.finalTotal},${o.status}`;
    csvContent += row + "\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `KulinerBunta_Report_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  logActivity('EXPORT_CSV', getSession()?.name || 'ADMIN', 'REPORTING', 'Exported orders CSV report');
  showToast('Laporan CSV transaksi berhasil diunduh ke perangkat Anda!', 'success');
}

/* Merchant Actions (SP-007) */
function merchantAcceptOrder(orderId) {
  updateOrderStatus(orderId, 'MENYIAPKAN', 'Pesanan diterima & sedang disiapkan dapur.');
}

function merchantRejectOrder(orderId) {
  updateOrderStatus(orderId, 'DITOLAK', 'Pesanan ditolak merchant.');
}

function merchantSetReady(orderId) {
  updateOrderStatus(orderId, 'SIAP_DIAMBIL', 'Pesanan selesai disiapkan & siap diambil kurir.');
}

/* Merchant Registration */
function openMerchantRegistrationModal() {
  const modal = document.getElementById('merchant-registration-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  if (window.lucide) lucide.createIcons();
}

function closeMerchantRegistrationModal() {
  const modal = document.getElementById('merchant-registration-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

function submitMerchantRegistration(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const storeName = data.get('storeName').trim();
  const ownerName = data.get('ownerName').trim();
  const phone = data.get('phone').trim();
  const email = data.get('email').trim();
  const category = data.get('category').trim();
  const address = data.get('address').trim();

  const merchants = getAdminMerchants();
  const merchant = {
    id: `m-${Date.now()}`,
    name: storeName,
    ownerName,
    phone,
    email,
    category,
    address,
    status: 'MENUNGGU_PERSETUJUAN',
    registeredAt: new Date().toISOString()
  };

  localStorage.setItem(MERCHANTS_STORE_KEY, JSON.stringify([...merchants, merchant]));
  logActivity('MERCHANT_REGISTERED', ownerName, 'MERCHANT_ONBOARDING', `New merchant registration: ${storeName}`);
  form.reset();
  closeMerchantRegistrationModal();
  showToast('Pendaftaran merchant berhasil dikirim. Menunggu pemeriksaan Admin.', 'success');
}

/* Courier Actions (SP-007) */
function courierAcceptDelivery(orderId) {
  updateOrderStatus(orderId, 'DIANTAR', 'Kurir mengambil tugas pengantaran.');
}

function courierCompleteDelivery(orderId) {
  updateOrderStatus(orderId, 'SELESAI', 'Pesanan berhasil diantar ke penerima!');
}

/* Admin Portal & Operational Governance Engine (SP-008 & SP-009) */
const MERCHANTS_STORE_KEY = 'kulinerbunta_admin_merchants';
const COURIERS_STORE_KEY = 'kulinerbunta_admin_couriers';

const DEFAULT_MERCHANTS = [
  { id: 'm-1', name: 'Dapur Kuliner Bunta', category: 'Spesial Cakalang', status: 'AKTIF', address: 'Jl. Trans Sulawesi Bunta' },
  { id: 'm-2', name: 'Kedai Saraba Bunta', category: 'Minuman Rempah', status: 'AKTIF', address: 'Kawasan Pelabuhan Bunta' },
  { id: 'm-3', name: 'Warung Camilan Lalampa', category: 'Kue Khas Bunta', status: 'AKTIF', address: 'Pasar Tradisional Bunta' }
];

const DEFAULT_COURIERS = [
  { id: 'c-1', name: 'Kurir Bunta #01 (Randi)', phone: '081234567890', status: 'SIAP_BERTUGAS' },
  { id: 'c-2', name: 'Kurir Bunta #02 (Fikri)', phone: '082345678901', status: 'SIAP_BERTUGAS' },
  { id: 'c-3', name: 'Kurir Bunta #03 (Andi)', phone: '083456789012', status: 'SIAP_BERTUGAS' }
];

function getAdminMerchants() {
  try {
    const data = localStorage.getItem(MERCHANTS_STORE_KEY);
    if (!data) {
      localStorage.setItem(MERCHANTS_STORE_KEY, JSON.stringify(DEFAULT_MERCHANTS));
      return DEFAULT_MERCHANTS;
    }
    return JSON.parse(data);
  } catch (e) {
    return DEFAULT_MERCHANTS;
  }
}

function getAdminCouriers() {
  try {
    const data = localStorage.getItem(COURIERS_STORE_KEY);
    if (!data) {
      localStorage.setItem(COURIERS_STORE_KEY, JSON.stringify(DEFAULT_COURIERS));
      return DEFAULT_COURIERS;
    }
    return JSON.parse(data);
  } catch (e) {
    return DEFAULT_COURIERS;
  }
}

function renderAdminDashboard() {
  const merchants = getAdminMerchants();
  const couriers = getAdminCouriers();
  const orders = getOrdersHistory();

  const totalM = merchants.length;
  const activeM = merchants.filter(m => m.status === 'AKTIF').length;
  const inactiveM = merchants.filter(m => m.status !== 'AKTIF').length;

  const totalC = couriers.length;
  const activeOrders = orders.filter(o => o.status !== 'SELESAI' && o.status !== 'DITOLAK').length;
  const completedOrders = orders.filter(o => o.status === 'SELESAI').length;

  if (document.getElementById('kpi-total-merchants')) document.getElementById('kpi-total-merchants').textContent = totalM;
  if (document.getElementById('kpi-active-merchants')) document.getElementById('kpi-active-merchants').textContent = activeM;
  if (document.getElementById('kpi-inactive-merchants')) document.getElementById('kpi-inactive-merchants').textContent = inactiveM;

  if (document.getElementById('kpi-total-couriers')) document.getElementById('kpi-total-couriers').textContent = totalC;
  if (document.getElementById('kpi-orders-today')) document.getElementById('kpi-orders-today').textContent = orders.length;
  if (document.getElementById('kpi-orders-active')) document.getElementById('kpi-orders-active').textContent = activeOrders;
  if (document.getElementById('kpi-orders-completed')) document.getElementById('kpi-orders-completed').textContent = completedOrders;

  renderAdminMerchants();
  renderAdminCouriers();
  renderAdminOrders();
  renderAdminAuditLogs();
  renderAnalyticsDashboard();
}

function renderAdminMerchants() {
  const container = document.getElementById('admin-merchants-list');
  if (!container) return;
  const merchants = getAdminMerchants();

  container.innerHTML = merchants.map(m => `
    <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
      <div class="flex items-center justify-between">
        <h4 class="font-extrabold text-white text-sm">${sanitizeHTML(m.name)}</h4>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold ${m.status === 'AKTIF' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'} border border-slate-700">
          ${m.status}
        </span>
      </div>
      <p class="text-xs text-slate-400">${sanitizeHTML(m.category)} • ${sanitizeHTML(m.address)}</p>
      <button onclick="toggleMerchantStatus('${m.id}')" class="w-full py-2 rounded-xl text-xs font-bold ${m.status === 'AKTIF' ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-emerald-600 text-white'} border border-slate-700 transition">
        ${m.status === 'AKTIF' ? 'Nonaktifkan Merchant' : 'Aktifkan Merchant'}
      </button>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function toggleMerchantStatus(id) {
  let merchants = getAdminMerchants();
  merchants = merchants.map(m => {
    if (m.id === id) {
      const newStatus = m.status === 'AKTIF' ? 'NONAKTIF' : 'AKTIF';
      logActivity('MERCHANT_STATUS_CHANGED', getSession()?.name || 'ADMIN', 'GOVERNANCE', `Merchant ${m.name} changed to ${newStatus}`);
      return { ...m, status: newStatus };
    }
    return m;
  });
  localStorage.setItem(MERCHANTS_STORE_KEY, JSON.stringify(merchants));
  showToast('Status Merchant berhasil diperbarui!', 'success');
  renderAdminDashboard();
}

function renderAdminCouriers() {
  const container = document.getElementById('admin-couriers-list');
  if (!container) return;
  const couriers = getAdminCouriers();

  container.innerHTML = couriers.map(c => `
    <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
      <div class="flex items-center justify-between">
        <h4 class="font-extrabold text-white text-sm">${sanitizeHTML(c.name)}</h4>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
          ${c.status}
        </span>
      </div>
      <p class="text-xs text-slate-400">${sanitizeHTML(c.phone)} • Wilayah Kecamatan Bunta</p>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function renderAdminOrders() {
  const container = document.getElementById('admin-orders-list');
  if (!container) return;
  const orders = getOrdersHistory();

  container.innerHTML = orders.map(ord => `
    <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
      <div>
        <span class="font-mono font-extrabold text-indigo-400">${ord.orderId}</span>
        <p class="text-white font-bold mt-0.5">${sanitizeHTML(ord.receiver)} — Rp ${ord.finalTotal.toLocaleString('id-ID')}</p>
        <span class="text-[10px] text-slate-400">${new Date(ord.timestamp).toLocaleString('id-ID')}</span>
      </div>
      <span class="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
        ${ord.status}
      </span>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function renderAdminAuditLogs() {
  const container = document.getElementById('admin-audit-logs-list');
  if (!container) return;
  const logs = getAuditLogs();

  container.innerHTML = logs.map(l => `
    <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
      <div class="space-y-0.5">
        <div class="flex items-center gap-2">
          <span class="font-bold text-white">${sanitizeHTML(l.action)}</span>
          <span class="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-slate-800 text-indigo-300">${sanitizeHTML(l.category)}</span>
        </div>
        <p class="text-slate-400">${sanitizeHTML(l.details)} — <em>Actor: ${sanitizeHTML(l.actor)}</em></p>
      </div>
      <span class="text-[10px] text-slate-500 font-mono">${new Date(l.timestamp).toLocaleTimeString('id-ID')}</span>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function handleSaveAdminSettings(event) {
  event.preventDefault();
  const deliveryFee = document.getElementById('setting-delivery-fee').value;
  const serviceFee = document.getElementById('setting-service-fee').value;

  logActivity('SETTINGS_UPDATED', getSession()?.name || 'ADMIN', 'CONFIG', `Updated fees: Delivery Rp ${deliveryFee}, Service Rp ${serviceFee}`);
  showToast('Konfigurasi aplikasi berhasil disimpan & log dicatat!', 'success');
}

function switchAdminTab(tabName) {
  const tabs = ['dashboard', 'analytics', 'health', 'merchants', 'couriers', 'orders', 'settings', 'activity'];
  tabs.forEach(t => {
    const panel = document.getElementById(`admin-panel-${t}`);
    const btn = document.getElementById(`admin-tab-btn-${t}`);
    if (panel) {
      if (t === tabName) panel.classList.remove('hidden');
      else panel.classList.add('hidden');
    }
    if (btn) {
      if (t === tabName) {
        btn.classList.add('bg-indigo-600', 'text-white');
        btn.classList.remove('bg-slate-900', 'text-slate-300');
      } else {
        btn.classList.remove('bg-indigo-600', 'text-white');
        btn.classList.add('bg-slate-900', 'text-slate-300');
      }
    }
  });

  if (tabName === 'dashboard') renderAdminDashboard();
  if (tabName === 'analytics') renderAnalyticsDashboard();
}

/* UI Handlers & Core Functions */
function initUIHandlers() {
  updateFavBadgeCount();
}

function openAuthModal(view = 'login') {
  showToast('Silakan buka portal sesuai peran Anda. Launcher tidak lagi memakai login gabungan.', 'info');
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

function switchAuthView(view) {
  const loginView = document.getElementById('auth-view-login');
  const registerView = document.getElementById('auth-view-register');
  const forgotView = document.getElementById('auth-view-forgot');

  if (loginView) loginView.classList.add('hidden');
  if (registerView) registerView.classList.add('hidden');
  if (forgotView) forgotView.classList.add('hidden');

  if (view === 'login' && loginView) loginView.classList.remove('hidden');
  if (view === 'register' && registerView) registerView.classList.remove('hidden');
  if (view === 'forgot' && forgotView) forgotView.classList.remove('hidden');
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value.trim();
  const password = form.password.value;
  const remember = form.remember ? form.remember.checked : true;

  if (!email || !password) {
    showToast('Harap isi alamat email/telepon dan kata sandi!', 'warning');
    return;
  }

  const roleSelect = form.role ? form.role.value : 'pelanggan';
  const roleNameMap = {
    pelanggan: 'Pembeli & Wisatawan',
    merchant: 'Mitra UMKM Kuliner',
    kurir: 'Armada Kurir Lokal',
    admin: 'Administrator Operasional'
  };

  const session = {
    token: 'token-' + Date.now(),
    name: email.split('@')[0].toUpperCase(),
    email: email,
    role: roleSelect,
    roleName: roleNameMap[roleSelect] || 'Pengguna',
    loginTime: new Date().toISOString()
  };

  setSession(session, remember);
  closeAuthModal();
  showToast(`Selamat Datang, ${session.name}! Berhasil masuk sebagai ${session.roleName}.`, 'success');
}

function handleRegisterSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const role = form.role.value;

  if (!name || !email) {
    showToast('Harap lengkapi nama dan email/telepon pendaftaran!', 'warning');
    return;
  }

  const roleNameMap = {
    pelanggan: 'Pembeli & Wisatawan',
    merchant: 'Mitra UMKM Kuliner',
    kurir: 'Armada Kurir Lokal',
    admin: 'Administrator Operasional'
  };

  const session = {
    token: 'token-' + Date.now(),
    name: name,
    email: email,
    role: role,
    roleName: roleNameMap[role] || 'Pengguna Baru',
    loginTime: new Date().toISOString()
  };

  setSession(session, true);
  closeAuthModal();
  showToast(`Pendaftaran Berhasil! Akun ${name} resmi terdaftar sebagai ${session.roleName}.`, 'success');
}

function handleForgotSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value.trim();

  if (!email) {
    showToast('Harap masukkan alamat email pemulihan!', 'warning');
    return;
  }

  closeAuthModal();
  showToast(`Tautan pemulihan kata sandi telah dikirim ke ${email}.`, 'success');
}

function handleLogout() {
  clearSession();
  showToast('Anda telah keluar dari akun. Status kembali ke Tamu (Guest).', 'info');
}

function navigatePortal(portalPath) {
  let target = portalPath;
  if (target.startsWith('/')) {
    const isSubfolder = window.location.pathname.includes('/app-');
    const cleanPath = target.replace(/^\//, '');
    target = isSubfolder ? '../' + cleanPath : './' + cleanPath;
    if (target.endsWith('/')) target += 'index.html';
  }

  window.location.href = target;
}

// Backward-compatible alias for older links; portals are now independently accessible.
function navigateProtectedPortal(portalPath) {
  navigatePortal(portalPath);
}

function renderUserSessionUI() {
  const guestHeader = document.getElementById('header-guest-view');
  const userHeader = document.getElementById('header-user-view');
  const userNameEl = document.getElementById('user-display-name');
  const userRoleEl = document.getElementById('user-display-role');

  const session = getSession();

  if (session) {
    if (guestHeader) guestHeader.classList.add('hidden');
    if (userHeader) userHeader.classList.remove('hidden');
    if (userNameEl) userNameEl.textContent = session.name;
    if (userRoleEl) userRoleEl.textContent = session.roleName;
  } else {
    if (guestHeader) guestHeader.classList.remove('hidden');
    if (userHeader) userHeader.classList.add('hidden');
  }
}

/* Consumer Experience & Live Search Engine (SP-004) */
let consumerSearchQuery = '';
let consumerCategoryFilter = 'all';
let consumerOnlyFavorites = false;

function renderConsumerCatalog() {
  const grid = document.getElementById('consumer-product-grid');
  const emptyState = document.getElementById('consumer-empty-state');
  const countEl = document.getElementById('catalog-results-count');
  if (!grid) return;

  const catalog = getMerchantCatalog();
  const favs = getLocalFavorites();

  let filtered = catalog;

  if (consumerSearchQuery) {
    const q = consumerSearchQuery.toLowerCase();
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(q) ||
      (item.merchant && item.merchant.toLowerCase().includes(q)) ||
      item.category.toLowerCase().includes(q) ||
      (item.description && item.description.toLowerCase().includes(q))
    );
  }

  if (consumerCategoryFilter !== 'all') {
    filtered = filtered.filter(item => item.category === consumerCategoryFilter);
  }

  if (consumerOnlyFavorites) {
    filtered = filtered.filter(item => favs.includes(item.id));
  }

  if (countEl) countEl.textContent = `${filtered.length} Menu Ditemukan`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  } else {
    if (emptyState) emptyState.classList.add('hidden');
  }

  grid.innerHTML = filtered.map(item => {
    const isFav = favs.includes(item.id);
    return `
      <div class="bg-slate-900/90 rounded-3xl p-5 border border-slate-800 hover:border-bunta-gold/50 transition duration-300 flex flex-col justify-between shadow-xl group">
        <div class="space-y-3">
          <div class="relative h-44 rounded-2xl overflow-hidden bg-slate-800 border border-slate-700">
            <img src="${sanitizeHTML(item.image) || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80'}" alt="${sanitizeHTML(item.name)}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-bunta-gold text-slate-950">
              ${sanitizeHTML(item.category)}
            </span>
            <button onclick="event.stopPropagation(); toggleLocalFavorite('${item.id}')" title="Favoritkan" class="absolute top-3 right-3 p-2 rounded-full ${isFav ? 'bg-bunta-red text-white' : 'bg-slate-950/70 text-slate-300 hover:text-bunta-red'} backdrop-blur-md transition shadow-md">
              <i data-lucide="heart" class="w-4 h-4 ${isFav ? 'fill-white' : ''}"></i>
            </button>
          </div>

          <div onclick="openProductDetailModal('${item.id}')" class="cursor-pointer">
            <div class="flex items-center gap-1.5 text-[11px] text-bunta-gold font-bold mb-1">
              <i data-lucide="store" class="w-3.5 h-3.5"></i>
              <span>${sanitizeHTML(item.merchant || 'Dapur Kuliner Bunta')}</span>
            </div>
            <h4 class="text-base font-extrabold font-display text-white group-hover:text-bunta-gold transition">${sanitizeHTML(item.name)}</h4>
            <p class="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">${sanitizeHTML(item.description || 'Hidangan khas Bunta.')}</p>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <div class="text-lg font-black font-display text-bunta-gold">
            Rp ${Number(item.price).toLocaleString('id-ID')}
          </div>
          <div class="flex items-center gap-1.5">
            <button onclick="addToCart('${item.id}')" title="Tambah ke Keranjang" class="p-2 rounded-xl bg-bunta-gradient text-white shadow-md hover:opacity-90 transition">
              <i data-lucide="shopping-cart" class="w-4 h-4"></i>
            </button>
            <button onclick="openProductDetailModal('${item.id}')" class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-extrabold border border-slate-700 transition flex items-center gap-1">
              <span>Rincian</span>
              <i data-lucide="chevron-right" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function handleLiveSearch(query) {
  consumerSearchQuery = query.trim();
  const clearBtn = document.getElementById('clear-search-btn');
  if (clearBtn) {
    if (consumerSearchQuery) clearBtn.classList.remove('hidden');
    else clearBtn.classList.add('hidden');
  }
  renderConsumerCatalog();
}

function clearSearchInput() {
  const input = document.getElementById('consumer-live-search');
  if (input) input.value = '';
  consumerSearchQuery = '';
  const clearBtn = document.getElementById('clear-search-btn');
  if (clearBtn) clearBtn.classList.add('hidden');
  renderConsumerCatalog();
}

function filterConsumerCategory(cat) {
  consumerCategoryFilter = cat;
  consumerOnlyFavorites = false;

  document.querySelectorAll('.consumer-cat-btn').forEach(btn => {
    btn.classList.remove('bg-bunta-gold', 'text-slate-950');
    btn.classList.add('bg-slate-900', 'text-slate-300');
  });

  const activeBtn = document.getElementById(`consumer-cat-${cat === 'all' ? 'all' : cat.toLowerCase().split(' ')[0]}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-slate-900', 'text-slate-300');
    activeBtn.classList.add('bg-bunta-gold', 'text-slate-950');
  }

  renderConsumerCatalog();
}

function toggleFavoritesView() {
  consumerOnlyFavorites = !consumerOnlyFavorites;
  const title = document.getElementById('catalog-section-title');

  if (consumerOnlyFavorites) {
    if (title) title.innerHTML = '<i data-lucide="heart" class="w-5 h-5 text-bunta-red fill-bunta-red"></i> <span>Daftar Menu Favorit Saya</span>';
    showToast('Menampilkan menu favorit yang disimpan.', 'info');
  } else {
    if (title) title.innerHTML = '<i data-lucide="sparkles" class="w-5 h-5 text-bunta-gold"></i> <span>Katalog Produk Kuliner Bunta</span>';
  }

  renderConsumerCatalog();
}

function openProductDetailModal(id) {
  const modal = document.getElementById('product-detail-modal');
  if (!modal) return;

  const catalog = getMerchantCatalog();
  const item = catalog.find(i => i.id === id);
  if (!item) return;

  const favs = getLocalFavorites();

  document.getElementById('detail-product-img').src = item.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80';
  document.getElementById('detail-product-category').textContent = item.category;
  document.getElementById('detail-product-name').textContent = item.name;
  document.getElementById('detail-product-merchant').textContent = item.merchant || 'Dapur Kuliner Bunta';
  document.getElementById('detail-product-price').textContent = `Rp ${Number(item.price).toLocaleString('id-ID')}`;
  document.getElementById('detail-product-desc').textContent = item.description || 'Porsi nikmat kuliner Bunta.';

  const favBtn = document.getElementById('detail-fav-btn');
  if (favBtn) {
    favBtn.setAttribute('onclick', `toggleLocalFavorite('${item.id}'); openProductDetailModal('${item.id}');`);
  }

  const addCartBtn = document.getElementById('detail-add-cart-btn');
  if (addCartBtn) {
    addCartBtn.setAttribute('onclick', `addToCart('${item.id}'); closeProductDetailModal();`);
  }

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  if (window.lucide) lucide.createIcons();
}

function closeProductDetailModal() {
  const modal = document.getElementById('product-detail-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

function openMerchantDetailModal(merchantName) {
  const modal = document.getElementById('merchant-detail-modal');
  if (!modal) return;

  document.getElementById('merchant-modal-name').textContent = merchantName;
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  if (window.lucide) lucide.createIcons();
}

function closeMerchantDetailModal() {
  const modal = document.getElementById('merchant-detail-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

/* Network Connection Monitor */
function initNetworkMonitor() {
  const offlineBanner = document.getElementById('offline-banner');

  function updateOnlineStatus() {
    if (navigator.onLine) {
      if (offlineBanner) offlineBanner.classList.add('hidden');
      showToast('Koneksi internet terhubung kembali.', 'success');
    } else {
      if (offlineBanner) offlineBanner.classList.remove('hidden');
      showToast('Modus Luring Aktif. Menampilkan data dari cache lokal.', 'warning');
    }
  }

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
}

/* Global Toast Notification Utility */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  let borderClass = 'border-blue-500 bg-slate-900 text-blue-300';
  if (type === 'warning') borderClass = 'border-amber-500 bg-slate-900 text-amber-300';
  if (type === 'success') borderClass = 'border-emerald-500 bg-slate-900 text-emerald-300';
  
  toast.className = `toast-message p-4 rounded-2xl border ${borderClass} shadow-2xl text-xs font-bold flex items-center justify-between gap-3`;
  toast.innerHTML = `
    <div class="flex items-center gap-2">
      <i data-lucide="info" class="w-4 h-4"></i>
      <span>${sanitizeHTML(message)}</span>
    </div>
    <button onclick="this.parentElement.remove()" class="opacity-70 hover:opacity-100">&times;</button>
  `;

  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    if (toast.parentElement) toast.remove();
  }, 4500);
}
