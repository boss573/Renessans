const products = [  {
    id: 1,
    name: "Набор керамической посуды",
    category: "home",
    price: 8990,
    description: "Комплект из 30 предметов с цветочным орнаментом",
    image: "/img/Наборкерамическойпосуды.png"
},
{
    id: 2,
    name: "Электрический камин",
    category: "home",
    price: 23450,
    description: "3D-эффект пламени с пультом управления",
    image: "/img/Электрическийкамин.png"
},
{
    id: 3,
    name: "Плед из альпаки",
    category: "home",
    price: 5450,
    description: "Гипоаллергенный, размер 150×200 см",
    image: "/img/Пледизальпаки.png"
},
{
    id: 4,
    name: "Умный LED-ночник",
    category: "home",
    price: 1299,
    description: "Управление через смартфон, 16 млн цветов",
    image: "/img/УмныйLED-ночник.png"
},
{
    id: 5,
    name: "Набор силиконовых крышек",
    category: "home",
    price: 890,
    description: "6 размеров, герметичное хранение",
    image: "/img/Наборсиликоновыхкрышек.png"
},
{
    id: 6,
    name: "Эко-шторы из льна",
    category: "home",
    price: 4590,
    description: "Ручная работа, размер 270×280 см",
    image: "/img/Эко-шторыизльна.png"
},
{
    id: 7,
    name: "Коврик для йоги",
    category: "home",
    price: 2450,
    description: "Антискользящий, толщина 6 мм",
    image: "/img/Коврикдляйоги.png"
},
{
    id: 8,
    name: "Настенные часы",
    category: "home",
    price: 3250,
    description: "Деревянный корпус, бесшумный механизм",
    image: "/img/Настенныечасы.png"
},
{
    id: 9,
    name: "Вакуумные пакеты для хранения",
    category: "home",
    price: 690,
    description: "Комплект из 12 штук с насосом",
    image: "/img/Вакуумныепакетыдляхранения.png"
},
{
    id: 10,
    name: "Электрический штопор",
    category: "home",
    price: 1990,
    description: "Автоматическое открывание бутылок",
    image: "/img/Электрическийштопор.png"
},

// Одежда (10)
{
    id: 11,
    name: "Кожаная косуха",
    category: "clothing",
    price: 18990,
    description: "Натуральная кожа, размеры 44-52",
    image: "/img/Кожанаякосуха.png"
},
{
    id: 12,
    name: "Кашемировое пальто",
    category: "clothing",
    price: 28900,
    description: "Двубортное, длина миди",
    image: "/img/Кашемировоепальто.png"
},
{
    id: 13,
    name: "Мужские кроссовки",
    category: "clothing",
    price: 7590,
    description: "Дышащая сетка, амортизирующая подошва",
    image: "/img/Мужскиекроссовки.png"
},
{
    id: 14,
    name: "Шелковый платок",
    category: "clothing",
    price: 2450,
    description: "Ручная роспись, размер 90×90 см",
    image: "/img/Шелковыйплаток.png"
},
{
    id: 15,
    name: "Термобелье",
    category: "clothing",
    price: 3290,
    description: "Комплект из 2 предметов, merino wool",
    image: "/img/Термобелье.png"
},
{
    id: 16,
    name: "Вечернее платье",
    category: "clothing",
    price: 14990,
    description: "Приталенный силуэт с кружевной отделкой",
    image: "/img/Приталенныйсилуэтскружевнойотделкой.png"
},
{
    id: 17,
    name: "Джинсы скинни",
    category: "clothing",
    price: 4990,
    description: "Эластичный хлопок, 5 размеров",
    image: "/img/Джинсыскинни.png"
},
{
    id: 18,
    name: "Бомбер",
    category: "clothing",
    price: 8900,
    description: "Нейлоновая ткань с утеплителем",
    image: "/img/Бомбер.png"
},
{
    id: 19,
    name: "Костюм спортивный",
    category: "clothing",
    price: 11200,
    description: "Хлопковый трикотаж, оверсайз",
    image: "/img/Хлопковыйтрикотажоверсайз.png"
},
{
    id: 20,
    name: "Рубашка оксфорд",
    category: "clothing",
    price: 3450,
    description: "Классический крой, голубая",
    image: "/img/Рубашкаоксфорд.png"
},

// Канцелярские принадлежности (10)
{
    id: 21,
    name: "Ежедневник кожаный",
    category: "stationery",
    price: 2450,
    description: "Прошитый переплет, 365 страниц",
    image: "/img/Ежедневниккожаный.png"
},
{
    id: 22,
    name: "Набор гелевых ручек",
    category: "stationery",
    price: 790,
    description: "24 цвета, тонкий наконечник 0.7 мм",
    image: "/img/24цветатонкийнаконечник0.7мм.png"
},
{
    id: 23,
    name: "Маркеры для скетчинга",
    category: "stationery",
    price: 1590,
    description: "Двусторонние, 12 штук",
    image: "/img/Маркерыдляскетчинга.png"
},
{
    id: 24,
    name: "Скрепки дизайнерские",
    category: "stationery",
    price: 290,
    description: "Латунь, форма животных",
    image: "/img/Скрепкидизайнерские.png"
},
{
    id: 25,
    name: "Папка-портфель",
    category: "stationery",
    price: 1890,
    description: "Кожаный ремень, формат А4",
    image: "/img/Папка-портфель.png"
},
{
    id: 26,
    name: "Бумага для акварели",
    category: "stationery",
    price: 1450,
    description: "Плотность 300 г/м², 20 листов",
    image: "/img/Бумагадляакварели.png"
},
{
    id: 27,
    name: "Ламинатор A4",
    category: "stationery",
    price: 3990,
    description: "Термопленка в комплекте",
    image: "/img/Термопленкавкомплекте.png"
},
{
    id: 28,
    name: "Настольный органайзер",
    category: "stationery",
    price: 2490,
    description: "Пластиковый, 5 отделений",
    image: "/img/Настольныйорганайзер.png"
},
{
    id: 29,
    name: "Степлер антистеплер",
    category: "stationery",
    price: 690,
    description: "Металлический корпус",
    image: "/img/Степлерантистеплер.png"
},
{
    id: 30,
    name: "Набор чертежный",
    category: "stationery",
    price: 1790,
    description: "12 предметов в деревянном кейсе",
    image: "/img/Наборчертежный.png   "
},

// Мебель (10)
{
    id: 31,
    name: "Кресло-мешок",
    category: "furniture",
    price: 5990,
    description: "Наполнитель EPS-шарики",
    image: "/img/Кресло-мешок.png   "
},
{
    id: 32,
    name: "Письменный стол",
    category: "furniture",
    price: 18990,
    description: "Дубовый массив, 140×70 см",
    image: "/img/Письменныйстол.png    "
},
{
    id: 33,
    name: "Стеллаж модульный",
    category: "furniture",
    price: 23450,
    description: "Стальные трубы и деревянные полки",
    image: "/img/Стеллажмодульный.png   "
},
{
    id: 34,
    name: "Тумба прикроватная",
    category: "furniture",
    price: 7990,
    description: "2 ящика и небольшой комод",
    image: "/img/небольшойкомодилишкаф.png    "
},
{
    id: 35,
    name: "Диван-книжка",
    category: "furniture",
    price: 45900,
    description: "Раскладной механизм, тканевая обивка",
    image: "/img/Диван-книжка.png    "
},
{
    id: 36,
    name: "Барный стул",
    category: "furniture",
    price: 5490,
    description: "Регулируемая высота",
    image: "/img/Барныйстул.png    "
},
{
    id: 37,
    name: "Комод с зеркалом",
    category: "furniture",
    price: 28900,
    description: "6 ящиков, ЛДСП",
    image: "/img/Комодсзеркалом.png    "
},
{
    id: 38,
    name: "Журнальный столик",
    category: "furniture",
    price: 12990,
    description: "Стеклянная столешница",
    image: "/img/Журнальныйстолик.png    "
},
{
    id: 39,
    name: "Шкаф-купе",
    category: "furniture",
    price: 67400,
    description: "Система 'Командор', 240×220 см",
    image: "/img/Шкаф-купе.png    "
},
{
    id: 40,
    name: "Этажерка для книг",
    category: "furniture",
    price: 4590,
    description: "Кованый металл, 4 полоки",
    image: "/img/Этажеркадлякниг.png    "
},

// Электрическая техника (10)
{
    id: 41,
    name: "Робот-пылесос",
    category: "electronics",
    price: 29990,
    description: "Навигация Lidar, влажная уборка",
    image: "/img/Робот-пылесос.png    "
},
{
    id: 42,
    name: "Электрочайник",
    category: "electronics",
    price: 3990,
    description: "1.7 л, подсветка, защита от накипи",
    image: "/img/Электрочайник.png    "
},
{
    id: 43,
    name: "Микроволновая печь",
    category: "electronics",
    price: 12990,
    description: "Гриль+конвекция, 25 литров",
    image: "/img/Микроволноваяпечь.png    "
},
{
    id: 44,
    name: "Умная колонка",
    category: "electronics",
    price: 8990,
    description: "Голосовой помощник, стереозвук",
    image: "/img/Умнаяколонка.png    "
},
{
    id: 45,
    name: "Фитнес-браслет",
    category: "electronics",
    price: 2490,
    description: "Мониторинг сна и пульса",
    image: "/img/Фитнес-браслет.png    "
},
{
    id: 46,
    name: "Электробритва",
    category: "electronics",
    price: 7990,
    description: "3D-плавающие ножи",
    image: "/img/Электробритва.png   "
},
{
    id: 47,
    name: "УФ-стерилизатор",
    category: "electronics",
    price: 4590,
    description: "Для телефонов и мелких предметов",
    image: "/img/УФ-стерилизатор.png    "
},
{
    id: 48,
    name: "Мультиварка",
    category: "electronics",
    price: 14990,
    description: "12 автоматических программ",
    image: "/img/Мультиварка.png    "
},
{
    id: 49,
    name: "Очиститель воздуха",
    category: "electronics",
    price: 45900,
    description: "Угольный фильтр, ионизация",
    image: "/img/Очистительвоздуха.png    "
},
{
    id: 50,
    name: "Смарт-телевизор",
    category: "electronics",
    price: 89990,
    description: "4K HDR, Android TV, 55″",
    image: "/img/Смарт-телевизор.png    "
} ];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
// Текущая активная сортировка
let currentSort = 'default';
// Инициализация сортировки
function initSorting() {
  document.querySelectorAll('.sort-option').forEach(option => {
    option.addEventListener('click', function() {
      const sortType = this.dataset.sort;
      
      if (sortType === currentSort) return;
      
      document.querySelectorAll('.sort-option').forEach(opt => {
        opt.classList.remove('selected');
      });
      this.classList.add('selected');
      
      currentSort = sortType;
      applySort(sortType);
    });
  });
}

// Функция применения сортировки
function applySort(sortType) {
  const productGrid = document.getElementById('productGrid');
  const productCards = Array.from(productGrid.children);
  
  productGrid.style.opacity = '0.5';
  productGrid.style.transition = 'opacity 0.2s ease';
  
  setTimeout(() => {
    switch(sortType) {
      case 'name-asc':
        productCards.sort((a, b) => 
          a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent)
        );
        break;
      case 'name-desc':
        productCards.sort((a, b) => 
          b.querySelector('h3').textContent.localeCompare(a.querySelector('h3').textContent)
        );
        break;
      case 'price-asc':
        productCards.sort((a, b) => 
          parseInt(a.querySelector('.product-price').textContent.replace(/\D/g,'')) - 
          parseInt(b.querySelector('.product-price').textContent.replace(/\D/g,''))
        );
        break;
      case 'price-desc':
        productCards.sort((a, b) => 
          parseInt(b.querySelector('.product-price').textContent.replace(/\D/g,'')) - 
          parseInt(a.querySelector('.product-price').textContent.replace(/\D/g,''))
        );
        break;
      default:
        productCards.sort((a, b) => 
          parseInt(a.dataset.id) - parseInt(b.dataset.id)
        );
    }
    
    productCards.forEach(card => productGrid.appendChild(card));
    productGrid.style.opacity = '1';
  }, 50);
}

// Управление модальными окнами
function showModal(id) {
  document.getElementById(id).style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
  document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    closeModal(event.target.id);
  }
}

// Корзина
class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('cart')) || [];
    this.init();
  }

  init() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.dataset.id);
        const product = products.find(p => p.id === productId);
        this.addItem(product);
        this.showNotification(`Товар "${product.name}" добавлен в корзину!`);
      }
      
      if (e.target.classList.contains('remove-from-cart')) {
        const productId = parseInt(e.target.dataset.id);
        this.removeItem(productId);
        this.showNotification(`Товар удален из корзины.`);
      }
    });

    document.addEventListener('change', (e) => {
      if (e.target.classList.contains('cart-item-quantity')) {
        const productId = parseInt(e.target.dataset.id);
        const quantity = parseInt(e.target.value);
        this.updateQuantity(productId, quantity);
      }
    });

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('clear-cart')) {
        this.clearCart();
        this.showNotification(`Корзина очищена.`);
      }
    });

    this.updateDisplay();
  }

  addItem(product) {
    const button = document.querySelector(`.add-to-cart[data-id="${product.id}"]`);
    if (button) {
      button.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Добавляем...`;
      button.disabled = true;
    }
  
    setTimeout(() => {
      const existingItem = this.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
      this.save();
      this.updateDisplay();

      if (button) {
        button.innerHTML = `<i class="fas fa-shopping-cart"></i> В корзину`;
        button.disabled = false;
      }
    }, 1000);
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.save();
    this.updateDisplay();
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity > 0 ? quantity : 1;
      this.save();
      this.updateDisplay();
    }
  }

  clearCart() {
    this.items = [];
    this.save();
    this.updateDisplay();
  }

  save() {
    try {
      localStorage.setItem('cart', JSON.stringify(this.items));
      this.updateCounter();
    } catch (error) {
      console.error('Ошибка при сохранении в localStorage:', error);
    }
  }

  updateCounter() {
    const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-counter').textContent = totalItems;
  }

  updateDisplay() {
    const cartItems = document.querySelector('.cart-items');
    const total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    cartItems.innerHTML = this.items.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>${item.price.toLocaleString()} ₽</p>
        </div>
        <div class="cart-item-controls">
          <input type="number" class="cart-item-quantity" data-id="${item.id}" 
                value="${item.quantity}" min="1">
          <button class="btn btn-sm remove-from-cart" data-id="${item.id}">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `).join('');

    document.getElementById('totalPrice').textContent = `${total.toLocaleString()} ₽`;
  }

  showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
}

// Фильтрация товаров
class ProductFilter {
  constructor() {
    this.categoryFilters = ['all'];
    this.minPrice = 0;
    this.maxPrice = 100000;
    this.init();
  }

  init() {
    document.querySelectorAll('[name="category"]').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        this.updateCategoryFilters(checkbox);
        this.filterProducts();
      });
    });

    this.initPriceFilter();
  }

  initPriceFilter() {
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    const currentMinPrice = document.getElementById('currentMinPrice');
    const currentMaxPrice = document.getElementById('currentMaxPrice');

    const updateDisplay = () => {
      currentMinPrice.textContent = `От ${this.formatPrice(minPriceInput.value)} ₽`;
      currentMaxPrice.textContent = `До ${this.formatPrice(maxPriceInput.value)} ₽`;
      
      this.minPrice = parseInt(minPriceInput.value) || 0;
      this.maxPrice = parseInt(maxPriceInput.value) || 100000;
      
      this.filterProducts();
    };

    minPriceInput.addEventListener('input', this.debounce(() => {
      let value = parseInt(minPriceInput.value) || 0;
      if (value > this.maxPrice) value = this.maxPrice;
      if (value < 0) value = 0;
      minPriceInput.value = value;
      updateDisplay();
    }, 300));

    maxPriceInput.addEventListener('input', this.debounce(() => {
      let value = parseInt(maxPriceInput.value) || 100000;
      if (value < this.minPrice) value = this.minPrice;
      if (value > 100000) value = 100000;
      maxPriceInput.value = value;
      updateDisplay();
    }, 300));

    minPriceInput.value = this.minPrice;
    maxPriceInput.value = this.maxPrice;
    updateDisplay();
  }

  formatPrice(price) {
    return parseInt(price).toLocaleString('ru-RU');
  }

  filterProducts() {
    const filtered = products.filter(product => {
      const categoryMatch = this.categoryFilters.includes('all') || 
        this.categoryFilters.includes(product.category);
      const priceMatch = product.price >= this.minPrice && 
                        product.price <= this.maxPrice;
      return categoryMatch && priceMatch;
    });

    this.renderProducts(filtered);
  }

  updateCategoryFilters(checkbox) {
    const value = checkbox.value;

    if (value === 'all') {
      this.categoryFilters = ['all'];
      document.querySelectorAll('[name="category"]').forEach(cb => {
        if (cb.value !== 'all') cb.checked = false;
      });
    } else {
      this.categoryFilters = this.categoryFilters.filter(cat => cat !== 'all');

      if (checkbox.checked) {
        this.categoryFilters.push(value);
      } else {
        this.categoryFilters = this.categoryFilters.filter(cat => cat !== value);
      }

      if (this.categoryFilters.length === 0) {
        this.categoryFilters = ['all'];
        document.querySelector('[name="category"][value="all"]').checked = true;
      }
    }
  }

  renderProducts(products) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = products.map(product => `
      <article class="product-card" data-id="${product.id}">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-details">
          <h3>${product.name}</h3>
          <div class="product-meta">
            <span class="product-price">${product.price.toLocaleString()} ₽</span>
            <span class="product-category">${product.category}</span>
          </div>
          <p class="product-description">${product.description}</p>
          <button class="btn add-to-cart" data-id="${product.id}">
            <i class="fas fa-shopping-cart"></i> В корзину
          </button>
        </div>
      </article>
    `).join('');
  }

  debounce(fn, delay) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), delay);
    };
  }
}

// Данные пользователей
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Инициализация системы аутентификации
function initAuthSystem() {
  if (users.length === 0) {
    users.push({
      id: 1,
      name: "Тестовый Пользователь",
      email: "test@example.com",
      password: "test123",
      registerDate: new Date().toISOString(),
      stats: {
        orders: 0,
        wishlist: 0
      }
    });
    localStorage.setItem('users', JSON.stringify(users));
  }

  updateAuthUI();
  initAuthForms();
}

// Обработка формы входа
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  loginUser(email, password);
});

// Обработка формы регистрации
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value.trim();
  registerUser(name, email, password);
});

// Функция входа
function loginUser(email, password) {
  if (!email || !password) {
    showNotification('Пожалуйста, заполните все поля', 'error');
    return;
  }

  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    closeModal('loginModal');
    updateAuthUI();
    showNotification(`Добро пожаловать, ${user.name}!`);
    document.getElementById('loginForm').reset();
  } else {
    showNotification('Неверный email или пароль', 'error');
  }
}

// Функция регистрации
function registerUser(name, email, password) {
  if (!name || !email || !password) {
    showNotification('Все поля обязательны для заполнения', 'error');
    return;
  }

  if (users.some(u => u.email === email)) {
    showNotification('Пользователь с таким email уже существует', 'error');
    return;
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    registerDate: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
    stats: {
      orders: 0,
      wishlist: 0
    }
  };

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  
  currentUser = newUser;
  localStorage.setItem('currentUser', JSON.stringify(newUser));
  updateAuthUI();
  closeModal('registerModal');
  
  showNotification(`Добро пожаловать, ${name}! Ваш профиль успешно создан.`);
  setTimeout(() => showProfileModal(), 500);
}

// Функция выхода
function logout() {
  currentUser = null;
  localStorage.removeItem('currentUser');
  updateAuthUI();
  closeModal('profileModal');
  showNotification('Вы успешно вышли из аккаунта');
}

// Показ профиля
function showProfileModal() {
  if (!currentUser) return;

  updateUserStats();

  const profileModal = document.createElement('div');
  profileModal.id = 'profileModal';
  profileModal.className = 'modal';
  profileModal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closeModal('profileModal')">&times;</span>
      <h2>Ваш профиль</h2>
      <div class="profile-header">
        <img src="${currentUser.avatar || '/img/default-avatar.jpg'}" class="profile-avatar">
        <h3>${currentUser.name}</h3>
        <p class="profile-email">${currentUser.email}</p>
      </div>
      <div class="profile-stats">
        <div class="stat-card">
          <div class="stat-value">${currentUser.stats?.orders || 0}</div>
          <div class="stat-label">Заказов</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${currentUser.stats?.wishlist || 0}</div>
          <div class="stat-label">Избранное</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${new Date(currentUser.registerDate).toLocaleDateString()}</div>
          <div class="stat-label">Дата регистрации</div>
        </div>
      </div>
      <div class="profile-actions">
        <button class="btn" onclick="logout()">
          <i class="fas fa-sign-out-alt"></i> Выйти
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(profileModal);
  showModal('profileModal');
}

// Обновление статистики пользователя
function updateUserStats() {
  if (!currentUser) return;
  
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  
  currentUser.stats = {
    orders: orders.filter(o => o.userId === currentUser.id).length,
    wishlist: wishlist.filter(i => i.userId === currentUser.id).length
  };
  
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  
  const userIndex = users.findIndex(u => u.id === currentUser.id);
  if (userIndex !== -1) {
    users[userIndex] = currentUser;
    localStorage.setItem('users', JSON.stringify(users));
  }
}

// Обработчик кнопки профиля
function handleProfileButtonClick() {
  if (currentUser) {
    showProfileModal();
  } else {
    showAuthChoiceModal();
  }
}

// Модальное окно выбора действия
function showAuthChoiceModal() {
  const modal = document.createElement('div');
  modal.id = 'authChoiceModal';
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closeModal('authChoiceModal')">&times;</span>
      <h2>Доступ к профилю</h2>
      <p>Чтобы получить доступ ко всем возможностям профиля, пожалуйста, войдите или зарегистрируйтесь.</p>
      <div class="auth-options">
        <button class="btn" onclick="showModal('loginModal'); closeModal('authChoiceModal')">
          <i class="fas fa-sign-in-alt"></i> Войти
        </button>
        <button class="btn" onclick="showModal('registerModal'); closeModal('authChoiceModal')">
          <i class="fas fa-user-plus"></i> Регистрация
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  showModal('authChoiceModal');
}

// Обновленная функция updateAuthUI
function updateAuthUI() {
    const profileButton = document.getElementById('profileButton');
    const profileButtonText = document.getElementById('profileButtonText');
    const authButtons = document.getElementById('authButtons');
    
    if (currentUser) {
      // Для авторизованных пользователей
      profileButtonText.textContent = currentUser.name.split(' ')[0]; // Короткое имя
      profileButton.style.display = 'flex';
      authButtons.style.display = 'none'; // Скрываем кнопки входа/регистрации
    } else {
      // Для неавторизованных пользователей
      profileButtonText.textContent = 'Профиль';
      profileButton.style.display = 'flex';
      authButtons.style.display = 'flex'; // Показываем кнопки входа/регистрации
    }
  }
// Обновленная функция handleProfileButtonClick
function handleProfileButtonClick() {
    if (currentUser) {
      showProfileModal();
    } else {
      // Показываем модальное окно с выбором действия
      showAuthChoiceModal();
    }
  }
// Показ уведомлений
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}
// Модальное окно выбора действия (добавьте в CSS соответствующие стили)
function showAuthChoiceModal() {
    const modal = document.createElement('div');
    modal.id = 'authChoiceModal';
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close" onclick="closeModal('authChoiceModal')">&times;</span>
        <h2>Доступ к профилю</h2>
        <p>Для просмотра профиля требуется авторизация</p>
        <div class="auth-options">
          <button class="btn" onclick="showModal('loginModal'); closeModal('authChoiceModal')">
            <i class="fas fa-sign-in-alt"></i> Войти
          </button>
          <button class="btn" onclick="showModal('registerModal'); closeModal('authChoiceModal')">
            <i class="fas fa-user-plus"></i> Зарегистрироваться
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    showModal('authChoiceModal');
  }
  
  // Инициализация при загрузке страницы
  document.addEventListener('DOMContentLoaded', function() {
    // Проверяем авторизацию
    currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Назначаем обработчик кнопке профиля
    document.getElementById('profileButton').addEventListener('click', handleProfileButtonClick);
    
    // Инициализация других компонентов
    const cart = new Cart();
    new ProductFilter();
    initSorting();
    
    // Обновляем интерфейс
    updateAuthUI();
  });
// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
  // Инициализация корзины
  const cart = new Cart();
  
  // Инициализация фильтров
  new ProductFilter();
  
  // Инициализация системы аутентификации
  initAuthSystem();
  
  // Инициализация сортировки
  initSorting();
  
  // Обработчик кнопки профиля
  document.getElementById('profileButton').addEventListener('click', handleProfileButtonClick);
  
  // Обработчик для обновления страницы
  document.getElementById('siteTitle').addEventListener('click', function() {
    location.reload();
  });
});
  
// Функционал добавления в избранное
function initWishlist() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-wishlist')) {
      const productId = parseInt(e.target.dataset.id);
      const product = products.find(p => p.id === productId);
      toggleWishlistItem(product);
    }
    
    if (e.target.classList.contains('remove-from-wishlist')) {
      const productId = parseInt(e.target.dataset.id);
      removeFromWishlist(productId);
    }
  });
}

function toggleWishlistItem(product) {
  const existingIndex = wishlist.findIndex(item => item.id === product.id);
  
  if (existingIndex >= 0) {
    wishlist.splice(existingIndex, 1);
    showNotification(`Товар "${product.name}" удален из избранного`);
  } else {
    wishlist.push(product);
    showNotification(`Товар "${product.name}" добавлен в избранное`);
  }
  
  saveWishlist();
  updateWishlistCounter();
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter(item => item.id !== productId);
  saveWishlist();
  updateWishlistCounter();
  renderWishlistItems();
  showNotification('Товар удален из избранного');
}

function saveWishlist() {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function updateWishlistCounter() {
  const counter = document.getElementById('wishlist-count');
  if (counter) {
    counter.textContent = wishlist.length;
  }
}

function renderWishlistItems() {
  const container = document.getElementById('wishlistItems');
  if (!container) return;
  
  container.innerHTML = wishlist.map(item => `
    <div class="wishlist-item">
      <img src="${item.image}" alt="${item.name}">
      <h4>${item.name}</h4>
      <p>${item.price.toLocaleString()} ₽</p>
      <div class="wishlist-actions">
        <button class="btn add-to-cart" data-id="${item.id}">
          <i class="fas fa-shopping-cart"></i> В корзину
        </button>
        <button class="remove-from-wishlist" data-id="${item.id}">
          <i class="fas fa-trash"></i> Удалить
        </button>
      </div>
    </div>
  `).join('');
}

// Обновите функцию showProfileModal
function showProfileModal() {
  if (!currentUser) return;

  const profileModal = document.createElement('div');
  profileModal.id = 'profileModal';
  profileModal.className = 'modal';
  profileModal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closeModal('profileModal')">&times;</span>
      <h2>Ваш профиль</h2>
      
      <div class="profile-tabs">
        <button class="tab-btn active" data-tab="profile-info">Профиль</button>
        <button class="tab-btn" data-tab="wishlist">Избранное (<span id="wishlist-count">${wishlist.length}</span>)</button>
      </div>
      
      <div class="tab-content" id="profile-info">
        <div class="profile-header">
          <img src="${currentUser.avatar || '/img/default-avatar.jpg'}" class="profile-avatar">
          <h3>${currentUser.name}</h3>
          <p class="profile-email">${currentUser.email}</p>
        </div>
        <div class="profile-stats">
          <div class="stat-card">
            <div class="stat-value">${currentUser.stats?.orders || 0}</div>
            <div class="stat-label">Заказов</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${wishlist.length}</div>
            <div class="stat-label">Избранное</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${new Date(currentUser.registerDate).toLocaleDateString()}</div>
            <div class="stat-label">Дата регистрации</div>
          </div>
        </div>
      </div>
      
      <div class="tab-content" id="wishlist" style="display:none;">
        ${wishlist.length > 0 ? `
          <div class="wishlist-items" id="wishlistItems">
            ${wishlist.map(item => `
              <div class="wishlist-item">
                <img src="${item.image}" alt="${item.name}">
                <h4>${item.name}</h4>
                <p>${item.price.toLocaleString()} ₽</p>
                <div class="wishlist-actions">
                  <button class="btn add-to-cart" data-id="${item.id}">
                    <i class="fas fa-shopping-cart"></i> В корзину
                  </button>
                  <button class="remove-from-wishlist" data-id="${item.id}">
                    <i class="fas fa-trash"></i> Удалить
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="empty-wishlist">
            <i class="fas fa-heart" style="font-size: 2rem; color: #e0d6c8;"></i>
            <p>Ваш список избранного пуст</p>
          </div>
        `}
      </div>
      
      <div class="profile-actions">
        <button class="btn" onclick="logout()">
          <i class="fas fa-sign-out-alt"></i> Выйти
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(profileModal);
  showModal('profileModal');
  
  // Инициализация табов
  initProfileTabs();
  // Инициализация обработчиков для избранного
  initWishlistHandlers();
}

function initProfileTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Удаляем active у всех кнопок
      tabBtns.forEach(b => b.classList.remove('active'));
      // Скрываем все табы
      tabContents.forEach(content => content.style.display = 'none');
      
      // Активируем текущую кнопку
      btn.classList.add('active');
      // Показываем текущий таб
      const tabId = btn.dataset.tab;
      document.getElementById(tabId).style.display = 'block';
    });
  });
}

function initWishlistHandlers() {
  document.querySelectorAll('.remove-from-wishlist').forEach(btn => {
    btn.addEventListener('click', function() {
      const productId = parseInt(this.dataset.id);
      removeFromWishlist(productId);
    });
  });
  
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function() {
      const productId = parseInt(this.dataset.id);
      const product = products.find(p => p.id === productId);
      cart.addItem(product);
    });
  });
}

// Обновите кнопки товаров (добавьте в renderProducts):
`<button class="btn add-to-wishlist" data-id="${product.id}">
  <i class="fas fa-heart"></i> В избранное
</button>`

// Добавьте в инициализацию при загрузке:
document.addEventListener('DOMContentLoaded', function() {
  // ... остальная инициализация ...
  initWishlist();
  updateWishlistCounter();
});

















































































































































































