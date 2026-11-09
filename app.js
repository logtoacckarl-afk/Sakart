/* =====================================================================
   SAKART — school prototype (plain HTML + CSS + JavaScript)
   ---------------------------------------------------------------------
   HOW TO ADD YOUR PHOTOS
   1) Paste a photo link between the quotes ("") below, e.g.
        image: "https://example.com/my-photo.jpg"
      You can also use a file in your project folder, e.g.
        image: "images/trowel.jpg"
   2) Leave it empty ("") to show the grey "photo" placeholder.
   ===================================================================== */

/* ---------- 1. PHOTOS FOR THE HOME PAGE ---------- */
const SITE_IMAGES = {
  heroMain: "https://homesteading.com/wp-content/uploads/2025/12/Gardening-tools-and-utensils-on-a-lush-green-meadow-Farming-tools-Featured-SS.jpg",          // big photo card in the hero (Farm Equipment)
  heroSmall1: "https://thumbs.dreamstime.com/b/farmer-spraying-pesticide-paddy-field-industry-58123239.jpg",        // small card: Easy Irrigation
  heroSmall2: "https://www.ruralsprout.com/wp-content/uploads/2024/09/fall-fertilizer-hero-960x640.jpg",        // small card: Farm Essentials
  categoryTools: "https://homesteading.com/wp-content/uploads/2025/12/Gardening-tools-and-utensils-on-a-lush-green-meadow-Farming-tools-Featured-SS.jpg",     // "Farm Tools" category
  categoryEquipment: "https://cdn-ildgchb.nitrocdn.com/KbsSPFmBuXcvyNIOGVWHKcnwviFfUwUp/assets/images/optimized/rev-f115155/aspee.com/blog/wp-content/uploads/2025/11/Gemini_Generated_Image_tg0atmtg0atmtg0a-e1763019677281.jpg", // "Equipment" category
  categorySupplies: "https://www.ruralsprout.com/wp-content/uploads/2024/09/fall-fertilizer-hero-960x640.jpg",  // "Farming Supplies" category
  authPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcVw23p9uURH16MjKTnltEwyLe3ypp4kQrLABu2LVLxbCbLtzqilDz5LhK&s=10"          // big photo on the left of the Login / Sign Up pages
};

/* ---------- 2. PRODUCTS (put each product photo in "image") ---------- */
const PRODUCTS = [
  { id: "p1", name: "Garden Hand Trowel",        category: "Farm Tools", price: 189,   seller: "Greenfield Farm Supply", rating: 4.7, reviews: 128, image: "https://csagrolk.com/wp-content/uploads/2025/11/f70.webp" },
  { id: "p2", name: "Heavy-Duty Pruning Shears", category: "Farm Tools", price: 450,   seller: "AgriMart Tools",         rating: 4.5, reviews: 86,  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEB1ZO86xbssz8pMhVJ37YSyP2s5eBKBlK9lb7RkjnLGxhyxCfBgaSiZo&s=10" },
  { id: "p3", name: "Rubber Farm Boots",         category: "Farm Tools", price: 560,   seller: "Greenfield Farm Supply", rating: 4.4, reviews: 61,  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfbqN9MZIpLY0gGbv2QJPkivuy5XtAhWlHHjCSxtsVw&s=10" },
  { id: "p4", name: "16L Knapsack Sprayer",      category: "Equipment",  price: 1850,  seller: "AgriMart Tools",         rating: 4.6, reviews: 142, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatwiwrRDd53zVspC8DXE0H_D26UhgiEFPXyj_Uu9mGhv7Mx2dso3aKT8&s=10" },
  { id: "p5", name: "Drip Irrigation Kit",       category: "Equipment",  price: 1290,  seller: "Bukid Equipment Hub",    rating: 4.8, reviews: 203, image: "https://images-na.ssl-images-amazon.com/images/I/61-R0RWvjmL.jpg" },
  { id: "p6", name: "Heavy-Duty na Water Pump",         category: "Equipment",  price: 24900, seller: "Bukid Equipment Hub",    rating: 4.3, reviews: 37,  image: "https://sc04.alicdn.com/kf/H7e0e688a0b0c4739b8fca0378de023d8j.jpg" },
  { id: "p7", name: "Hybrid Rice Seeds (1 kg)",  category: "Supplies",   price: 320,   seller: "Palay Farm Supply",      rating: 4.9, reviews: 312, image: "https://www.realfoodph.com/cdn/shop/files/RF15074_BSBANWAFARMSWHITEADLAYRICE1KG_4.png?v=1752215797&width=3840" },
  { id: "p8", name: "Organic Fertilizer (25 kg)",category: "Supplies",   price: 780,   seller: "Palay Farm Supply",      rating: 4.6, reviews: 175, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-2zlVgr-lWwx5k9aE-Y4NlzznZ95hr2K0hk28C3YJPV_fLPODqklEoE&s=10" }
];

/* =====================================================================
   Everything below is the app logic. You normally don't need to edit it.
   ===================================================================== */
const STORE_KEY = "sakart-demo-v2";
const DELIVERY_FEE = 99;
const CAT_LABEL = { "Farm Tools": "Farm Tools", "Equipment": "Equipment", "Supplies": "Farming Supplies" };
const CAT_CLASS = { "Farm Tools": "tools", "Equipment": "equipment", "Supplies": "supplies" };
const ORDER_STEPS = ["Order placed", "Confirmed", "Out for delivery", "Delivered"];
const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 90'><rect width='120' height='90' fill='#e9f1e2'/>" +
  "<g fill='none' stroke='#8aa893' stroke-width='3' stroke-linejoin='round' stroke-linecap='round'>" +
  "<rect x='36' y='30' width='48' height='34' rx='6'/><circle cx='60' cy='47' r='9'/><path d='M49 30l3-6h16l3 6'/></g></svg>"
);

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const peso = (n) => "₱" + Number(n).toLocaleString("en-PH");
const stars = (r) => { const n = Math.round(r); return "★".repeat(n) + "☆".repeat(5 - n); };

/* Only allow normal photo links (http/https, local files, uploaded images) */
function safeUrl(u) {
  u = String(u || "").trim();
  if (!u) return "";
  if (/^(https?:|data:image\/)/i.test(u)) return u;
  if (/^[a-z][a-z0-9+.-]*:/i.test(u) || u.startsWith("//")) return "";
  return u; // relative path such as images/photo.jpg
}
const img = (src, alt = "") =>
  `<img class="photo" src="${esc(safeUrl(src) || PLACEHOLDER)}" alt="${esc(alt)}" loading="lazy">`;

/* If a photo link is broken, show the placeholder instead */
document.addEventListener("error", (e) => {
  const t = e.target;
  if (t && t.tagName === "IMG" && t.src !== PLACEHOLDER && !t.dataset.failed) {
    t.dataset.failed = "1";
    t.src = PLACEHOLDER;
  }
}, true);

/* ---------- state ---------- */
const defaults = () => ({ cart: [], orders: [], orderSeq: 1001, seller: null, listings: [], users: [] });
function load() {
  try {
    const s = JSON.parse(localStorage.getItem(STORE_KEY));
    if (s && typeof s === "object") return Object.assign(defaults(), s);
  } catch (e) { /* ignore */ }
  return defaults();
}
let state = load();
let compare = [];
let pendingPhoto = "";

function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
  catch (e) { toast("Could not save (browser storage is full). Try a smaller photo or a photo link."); }
}
const allProducts = () => PRODUCTS.concat(state.listings);
const findProduct = (id) => allProducts().find((p) => p.id === id);

/* ---------- toast ---------- */
let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ---------- navigation ---------- */
const PAGES = ["home", "marketplace", "seller", "checkout", "orders", "login", "signup", "forgot"];
function go(id) {
  if (!PAGES.includes(id)) id = "home";
  if (location.hash !== "#" + id) location.hash = id; else show(id);
}
function show(id) {
  if (!PAGES.includes(id)) id = "home";
  $$(".page").forEach((p) => p.classList.toggle("active", p.id === id));
  $$(".nav-link").forEach((b) => b.classList.toggle("active", b.dataset.go === id));
  $("#nav").classList.remove("open");
  $("#menu-toggle").setAttribute("aria-expanded", "false");
  renderAll();
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", () => show(location.hash.slice(1)));

/* ---------- rendering: products ---------- */
function productCard(p, withCompare) {
  const rating = p.rating
    ? `<div class="product-rating"><span class="stars">${stars(p.rating)}</span> ${Number(p.rating).toFixed(1)} (${p.reviews})</div>`
    : `<div class="product-rating">New listing</div>`;
  const cmp = withCompare
    ? `<label class="compare-toggle"><input type="checkbox" data-compare="${esc(p.id)}" ${compare.includes(p.id) ? "checked" : ""}> Compare</label>`
    : "";
  return `<article class="product-card">
    <div class="product-image ${CAT_CLASS[p.category] || ""}">
      ${img(p.image, p.name)}
      <span class="product-category">${esc(CAT_LABEL[p.category] || p.category)}</span>
    </div>
    <div class="product-info">
      <span class="product-seller">Sold by ${esc(p.seller)}</span>
      <h3>${esc(p.name)}</h3>
      ${rating}
      ${cmp}
      <div class="product-bottom">
        <span class="product-price">${peso(p.price)}</span>
        <button class="add-btn" type="button" data-add="${esc(p.id)}" aria-label="Add ${esc(p.name)} to cart">+</button>
      </div>
    </div>
  </article>`;
}

function renderHome() {
  $("#featured-products").innerHTML = allProducts().slice(0, 4).map((p) => productCard(p, false)).join("");
}

function renderMarketplace() {
  const q = $("#product-search").value.trim().toLowerCase();
  const cat = $("#category-filter").value;
  const list = allProducts().filter((p) =>
    (cat === "All" || p.category === cat) &&
    (!q || [p.name, p.category, CAT_LABEL[p.category], p.seller].join(" ").toLowerCase().includes(q))
  );
  $("#product-count").textContent = `${list.length} product${list.length === 1 ? "" : "s"}`;
  $("#marketplace-products").innerHTML = list.length
    ? list.map((p) => productCard(p, true)).join("")
    : `<div class="empty-state" style="grid-column:1/-1"><span>🔎</span><h3>No products found</h3><p>Try a different word or choose another category.</p></div>`;
  renderCompare();
}

function renderCompare() {
  compare = compare.filter((id) => findProduct(id));
  const panel = $("#compare-panel");
  if (!compare.length) { panel.classList.add("hidden"); panel.innerHTML = ""; return; }
  panel.classList.remove("hidden");
  if (compare.length === 1) {
    panel.innerHTML = `<h3>Compare prices</h3><p class="compare-note">Tick one more product to compare.</p>`;
    return;
  }
  const [a, b] = compare.map(findProduct);
  const box = (p) => `<div class="compare-box">
      <div class="product-image ${CAT_CLASS[p.category] || ""}" style="height:120px;border-radius:9px">${img(p.image, p.name)}</div>
      <h4>${esc(p.name)}</h4><p>${esc(CAT_LABEL[p.category] || p.category)}</p><p>Sold by ${esc(p.seller)}</p>
      <p>${p.rating ? "Rating: " + Number(p.rating).toFixed(1) + " ★" : "New listing"}</p><strong>${peso(p.price)}</strong></div>`;
  const diff = Math.abs(a.price - b.price);
  const note = diff === 0 ? "Both products have the same price."
    : `${esc((a.price < b.price ? a : b).name)} is ${peso(diff)} cheaper.`;
  panel.innerHTML = `<h3>Compare prices</h3><div class="compare-grid">${box(a)}${box(b)}</div><p class="compare-note">${note}</p>`;
}

/* ---------- rendering: seller ---------- */
function renderSeller() {
  const s = state.seller, box = $("#seller-status"), panel = $("#listing-panel");
  if (!s) { box.innerHTML = ""; panel.classList.add("hidden"); return; }
  const info = `${esc(s.businessName)} · ${esc(s.sellerType)} · ${esc(s.location)}`;
  box.innerHTML = s.status === "approved"
    ? `<div class="seller-status-box"><strong>✅ Seller approved (demo)</strong><p>${info}<br>You can now publish products below.</p></div>`
    : `<div class="seller-status-box"><strong>⏳ Application under review</strong><p>${info}</p><button class="btn btn-soft btn-small" type="button" data-approve>Simulate admin approval</button></div>`;
  panel.classList.toggle("hidden", s.status !== "approved");
  renderMyListings();
}

function renderMyListings() {
  const box = $("#my-listings");
  box.innerHTML = state.listings.length
    ? state.listings.map((p) => `<div class="listing-item">
        <div class="listing-left"><span class="listing-thumb">${img(p.image, p.name)}</span>
          <div><strong>${esc(p.name)}</strong><br><span class="muted">${esc(CAT_LABEL[p.category] || p.category)} · ${peso(p.price)}</span></div></div>
        <div class="listing-actions">
          <button class="btn btn-soft btn-small" type="button" data-photo-edit="${esc(p.id)}">Change photo</button>
          <button class="btn btn-danger btn-small" type="button" data-listing-remove="${esc(p.id)}">Remove</button>
        </div></div>`).join("")
    : `<p class="muted" style="margin:0;font-size:13px">No listings yet. Publish your first demo product above.</p>`;
}

function setPreview(src) {
  $("#photo-preview").innerHTML = img(src, "Photo preview");
}

/* ---------- rendering: cart ---------- */
function cartLines() {
  return state.cart.map((c) => ({ p: findProduct(c.id), qty: c.qty })).filter((l) => l.p);
}
function renderCart() {
  state.cart = state.cart.filter((c) => findProduct(c.id));
  const lines = cartLines();
  const count = lines.reduce((n, l) => n + l.qty, 0);
  $("#nav-cart-count").textContent = count;
  $("#cart-items-label").textContent = count ? `${count} item${count === 1 ? "" : "s"}` : "";
  $("#cart-items").innerHTML = lines.length
    ? lines.map(({ p, qty }) => `<div class="cart-row">
        <div class="cart-thumb">${img(p.image, p.name)}</div>
        <div class="cart-info"><h3>${esc(p.name)}</h3><p>Sold by ${esc(p.seller)}</p>
          <div class="cart-actions">
            <div class="qty-control"><button type="button" data-qty="${esc(p.id)}" data-delta="-1" aria-label="Decrease">−</button><span>${qty}</span><button type="button" data-qty="${esc(p.id)}" data-delta="1" aria-label="Increase">+</button></div>
            <button class="remove-btn" type="button" data-remove="${esc(p.id)}">Remove</button>
          </div></div>
        <div class="cart-price">${peso(p.price * qty)}<small>${peso(p.price)} each</small></div></div>`).join("")
    : `<div class="empty-state"><span>🧺</span><h3>Your cart is empty</h3><p>Add farm tools, equipment or supplies from the marketplace.</p><button class="btn btn-dark" type="button" data-go="marketplace">Browse products</button></div>`;

  const sub = lines.reduce((n, l) => n + l.p.price * l.qty, 0);
  const fee = lines.length ? DELIVERY_FEE : 0;
  $("#cart-summary").innerHTML = `
    <div class="summary-line"><span>Subtotal</span><span>${peso(sub)}</span></div>
    <div class="summary-line"><span>Demo delivery fee</span><span>${peso(fee)}</span></div>
    <div class="summary-total"><span>Total</span><strong>${peso(sub + fee)}</strong></div>`;
  $("#checkout-form button[type=submit]").disabled = !lines.length;
}

/* ---------- rendering: orders ---------- */
function renderOrders() {
  const box = $("#orders-list");
  if (!state.orders.length) {
    box.innerHTML = `<div class="empty-state"><span>📦</span><h3>No orders yet</h3><p>Orders you place in the demo checkout will show up here.</p><button class="btn btn-dark" type="button" data-go="marketplace">Start shopping</button></div>`;
    return;
  }
  box.innerHTML = state.orders.map((o) => `<article class="order-card">
    <div class="order-card-head"><div><span class="eyebrow">ORDER</span><h3>#${esc(o.id)}</h3><p>${esc(o.date)}</p></div><span class="order-tag">${ORDER_STEPS[o.status]}</span></div>
    <div class="order-meta">
      <div><span>Recipient</span><strong>${esc(o.buyer)}</strong></div>
      <div><span>Delivery area</span><strong>${esc(o.area)}</strong></div>
      <div><span>Payment (demo)</span><strong>${esc(o.payment)}</strong></div>
    </div>
    <div class="timeline">${ORDER_STEPS.map((s, i) => `<div class="timeline-step ${i <= o.status ? "done" : ""}">${s}</div>`).join("")}</div>
    <div class="order-card-foot">
      <p>${o.items.map((i) => `${esc(i.name)} ×${i.qty}`).join(", ")} — <strong>${peso(o.total)}</strong></p>
      ${o.status < ORDER_STEPS.length - 1 ? `<button class="btn btn-soft btn-small" type="button" data-advance="${esc(o.id)}">Simulate next update →</button>` : `<span class="muted">Delivered ✔</span>`}
    </div></article>`).join("");
}

function renderAll() { renderHome(); renderMarketplace(); renderSeller(); renderCart(); renderOrders(); renderAuth(); }

/* ---------- accounts (demo only: stored in this browser) ---------- */
const SESSION_KEY = "sakart-session";
function getSession() {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY) || sessionStorage.getItem(SESSION_KEY)); } catch (e) { return null; }
}
function clearSession() {
  try { localStorage.removeItem(SESSION_KEY); sessionStorage.removeItem(SESSION_KEY); } catch (e) { /* ignore */ }
}
function setSession(u, remember) {
  clearSession();
  try { (remember ? localStorage : sessionStorage).setItem(SESSION_KEY, JSON.stringify({ name: u.name, email: u.email })); } catch (e) { /* ignore */ }
}
async function hashPw(p) {
  try {
    const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("sakart:" + p));
    return Array.from(new Uint8Array(b)).map((x) => x.toString(16).padStart(2, "0")).join("");
  } catch (e) { return "b64:" + btoa(unescape(encodeURIComponent(p))); }
}
function renderAuth() {
  const s = getSession();
  $("#auth-actions").innerHTML = s
    ? `<span class="demo-chip">Hi, ${esc(String(s.name).split(" ")[0])}</span><button class="demo-chip" type="button" data-logout>Log out</button>`
    : `<button class="demo-chip" type="button" data-go="login">Log in</button><button class="demo-chip chip-solid" type="button" data-go="signup">Sign up</button>`;
}
function formMsg(form, text, ok) {
  const m = $(".form-msg", form);
  m.textContent = text;
  m.className = "form-msg show " + (ok ? "ok" : "error");
}

/* ---------- apply home-page photos ---------- */
function applySitePhotos() {
  $$("img[data-photo]").forEach((el) => {
    const url = safeUrl(SITE_IMAGES[el.dataset.photo]);
    if (el.dataset.photo === "authPhoto") { el.style.display = url ? "block" : "none"; if (url) el.src = url; return; }
    el.src = url || PLACEHOLDER;
  });
}

/* ---------- photo upload (resized so it fits in browser storage) ---------- */
function readImage(file) {
  return new Promise((resolve, reject) => {
    if (!/^image\//.test(file.type)) return reject(new Error("Please choose an image file."));
    const fr = new FileReader();
    fr.onerror = () => reject(new Error("Could not read that file."));
    fr.onload = () => {
      const im = new Image();
      im.onerror = () => reject(new Error("That image could not be opened."));
      im.onload = () => {
        const k = Math.min(1, 720 / Math.max(im.width, im.height));
        const c = document.createElement("canvas");
        c.width = Math.round(im.width * k);
        c.height = Math.round(im.height * k);
        c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
        resolve(c.toDataURL("image/jpeg", 0.82));
      };
      im.src = fr.result;
    };
    fr.readAsDataURL(file);
  });
}

/* ---------- actions ---------- */
function addToCart(id) {
  const line = state.cart.find((c) => c.id === id);
  if (line) line.qty = Math.min(99, line.qty + 1); else state.cart.push({ id, qty: 1 });
  save(); renderCart();
  toast(`Added to cart: ${findProduct(id).name}`);
}

document.addEventListener("click", (e) => {
  const t = e.target.closest("button, [data-go], [data-category-go]");
  if (!t) return;
  const d = t.dataset;

  if (d.go) return go(d.go);
  if (d.categoryGo) { $("#category-filter").value = d.categoryGo; $("#product-search").value = ""; return go("marketplace"); }
  if (d.togglePw !== undefined) {
    const inp = t.parentElement.querySelector("input");
    inp.type = inp.type === "password" ? "text" : "password";
    return t.classList.toggle("on", inp.type === "text");
  }
  if (d.logout !== undefined) { clearSession(); renderAuth(); toast("You have been logged out."); return go("home"); }
  if (d.demo) return toast(`${d.demo} is not available in this prototype.`);
  if (d.add) return addToCart(d.add);

  if (d.qty) {
    const line = state.cart.find((c) => c.id === d.qty);
    if (!line) return;
    line.qty += Number(d.delta);
    if (line.qty <= 0) state.cart = state.cart.filter((c) => c !== line);
    line.qty = Math.min(99, line.qty);
    save(); return renderCart();
  }
  if (d.remove) { state.cart = state.cart.filter((c) => c.id !== d.remove); save(); return renderCart(); }

  if (d.approve !== undefined && state.seller) {
    state.seller.status = "approved"; save(); renderSeller();
    return toast("Seller approved (simulated). You can publish products now.");
  }
  if (d.listingRemove) {
    state.listings = state.listings.filter((p) => p.id !== d.listingRemove);
    save(); renderAll(); return toast("Listing removed.");
  }
  if (d.photoEdit) {
    const p = state.listings.find((x) => x.id === d.photoEdit);
    if (!p) return;
    const current = p.image && !p.image.startsWith("data:") ? p.image : "";
    const val = window.prompt("Paste the new photo link (leave empty to remove the photo):", current);
    if (val === null) return;
    p.image = safeUrl(val);
    if (val.trim() && !p.image) toast("That link is not allowed. Use an https:// link.");
    save(); renderAll(); return;
  }
  if (d.advance) {
    const o = state.orders.find((x) => x.id === d.advance);
    if (o && o.status < ORDER_STEPS.length - 1) { o.status++; save(); renderOrders(); toast(`Order #${o.id}: ${ORDER_STEPS[o.status]}`); }
    return;
  }
});

document.addEventListener("change", (e) => {
  const c = e.target.closest("[data-compare]");
  if (!c) return;
  const id = c.dataset.compare;
  if (c.checked) {
    compare.push(id);
    if (compare.length > 2) { compare.shift(); toast("You can compare 2 products at a time."); renderMarketplace(); return; }
  } else {
    compare = compare.filter((x) => x !== id);
  }
  renderCompare();
});

/* ---------- forms ---------- */
function bindForms() {
  $("#product-search").addEventListener("input", renderMarketplace);
  $("#category-filter").addEventListener("change", renderMarketplace);

  $("#menu-toggle").addEventListener("click", () => {
    const open = $("#nav").classList.toggle("open");
    $("#menu-toggle").setAttribute("aria-expanded", String(open));
  });

  $("#seller-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    state.seller = {
      businessName: String(f.get("businessName")).trim(),
      sellerType: String(f.get("sellerType")),
      location: String(f.get("location")).trim(),
      status: "pending"
    };
    save(); e.target.reset(); renderSeller();
    toast("Application submitted (demo).");
  });

  const listingForm = $("#listing-form");
  const urlInput = listingForm.elements.image;
  const fileInput = listingForm.elements.photoFile;
  setPreview("");

  urlInput.addEventListener("input", () => {
    pendingPhoto = ""; fileInput.value = "";
    setPreview(urlInput.value);
  });
  fileInput.addEventListener("change", async () => {
    const file = fileInput.files[0];
    if (!file) return;
    try {
      pendingPhoto = await readImage(file);
      urlInput.value = "";
      setPreview(pendingPhoto);
    } catch (err) {
      pendingPhoto = ""; fileInput.value = ""; toast(err.message);
    }
  });

  listingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!state.seller || state.seller.status !== "approved") return toast("Seller approval is required first.");
    const f = new FormData(listingForm);
    const typed = String(f.get("image") || "").trim();
    if (typed && !safeUrl(typed)) return toast("That photo link is not allowed. Use an https:// link.");
    state.listings.unshift({
      id: "u" + Date.now(),
      name: String(f.get("productName")).trim(),
      category: String(f.get("category")),
      price: Math.max(1, Math.round(Number(f.get("price")))),
      seller: state.seller.businessName,
      rating: 0, reviews: 0,
      image: pendingPhoto || safeUrl(typed)
    });
    save();
    listingForm.reset(); pendingPhoto = ""; setPreview("");
    renderAll();
    toast("Demo product published!");
  });

  $("#checkout-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const lines = cartLines();
    if (!lines.length) return toast("Your cart is empty.");
    const f = new FormData(e.target);
    const total = lines.reduce((n, l) => n + l.p.price * l.qty, 0) + DELIVERY_FEE;
    state.orders.unshift({
      id: "SK-" + state.orderSeq++,
      date: new Date().toLocaleDateString("en-PH", { year: "numeric", month: "short", day: "numeric" }),
      buyer: String(f.get("buyer")).trim(),
      area: String(f.get("area")).trim(),
      payment: String(f.get("payment")),
      items: lines.map((l) => ({ name: l.p.name, qty: l.qty })),
      total, status: 0
    });
    state.cart = [];
    save(); e.target.reset();
    toast("Demo order placed!");
    go("orders");
  });

  $("#login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const email = String(f.get("email")).trim().toLowerCase();
    const user = state.users.find((u) => u.email === email);
    if (!user || user.hash !== await hashPw(String(f.get("password")))) return formMsg(e.target, "Incorrect email or password.", false);
    setSession(user, f.get("remember") === "on");
    e.target.reset(); formMsg(e.target, "", true); e.target.querySelector(".form-msg").classList.remove("show");
    renderAuth(); toast(`Welcome back, ${user.name.split(" ")[0]}!`); go("home");
  });

  $("#signup-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const email = String(f.get("email")).trim().toLowerCase();
    const pass = String(f.get("password"));
    if (pass.length < 6) return formMsg(e.target, "Password must be at least 6 characters.", false);
    if (pass !== String(f.get("confirm"))) return formMsg(e.target, "Passwords do not match.", false);
    if (state.users.some((u) => u.email === email)) return formMsg(e.target, "That email is already registered. Try logging in.", false);
    const user = { name: String(f.get("name")).trim(), email, hash: await hashPw(pass) };
    state.users.push(user); save(); setSession(user, true);
    e.target.reset(); e.target.querySelector(".form-msg").classList.remove("show");
    renderAuth(); toast(`Account created. Welcome, ${user.name.split(" ")[0]}!`); go("home");
  });

  $("#forgot-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = String(new FormData(e.target).get("email")).trim();
    formMsg(e.target, `Demo only: a real site would email a reset link to ${email}.`, true);
  });

  $("#reset-demo").addEventListener("click", () => {
    if (!window.confirm("Reset all demo data (cart, orders, seller and your listings)?")) return;
    try { localStorage.removeItem(STORE_KEY); } catch (e) { /* ignore */ }
    clearSession(); state = defaults(); compare = []; pendingPhoto = "";
    renderAll(); setPreview("");
    toast("Demo data has been reset.");
  });
}

/* ---------- start ---------- */
document.addEventListener("DOMContentLoaded", () => {
  applySitePhotos();
  bindForms();
  show(location.hash.slice(1) || "home");
});
