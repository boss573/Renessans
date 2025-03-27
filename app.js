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

// Текущая активная сортировка
let currentSort = 'default';

// Инициализация сортировки
function initSorting() {
  document.querySelectorAll('.sort-option').forEach(option => {
    option.addEventListener('click', function() {
      const sortType = this.dataset.sort;
      
      // Если уже выбрана эта сортировка - ничего не делаем
      if (sortType === currentSort) return;
      
      // Обновляем визуальное выделение
      document.querySelectorAll('.sort-option').forEach(opt => {
        opt.classList.remove('selected');
      });
      this.classList.add('selected');
      
      // Сохраняем текущую сортировку
      currentSort = sortType;
      
      // Применяем сортировку
      applySort(sortType);
    });
  });
}

// Функция применения сортировки
function applySort(sortType) {
  const productGrid = document.getElementById('productGrid');
  const productCards = Array.from(productGrid.children);
  
  // Добавляем анимацию перестроения
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
        // Сортировка по умолчанию (по ID)
        productCards.sort((a, b) => 
          parseInt(a.dataset.id) - parseInt(b.dataset.id)
        );
    }
    
    // Переставляем элементы в DOM
    productCards.forEach(card => productGrid.appendChild(card));
    
    // Возвращаем прозрачность
    productGrid.style.opacity = '1';
  }, 50);
}

// Инициализируем при загрузке
document.addEventListener('DOMContentLoaded', initSorting);

// Управление модальными окнами
function showModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Обработка формы регистрации
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Регистрация успешна! Страница будет перезагружена.');
    setTimeout(() => location.reload(), 1000);
});

// Обработка формы входа
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Вход выполнен! Страница будет перезагружена.');
    setTimeout(() => location.reload(), 1000);
});

// Корзина
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.init();
    }

    init() {
        // Обработка добавления товаров в корзину
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart')) {
                const productId = parseInt(e.target.dataset.id);
                const product = products.find(p => p.id === productId);
                this.addItem(product);
                this.showNotification(`Товар "${product.name}" добавлен в корзину!`);
            }
        });

        // Обработка удаления товаров из корзины
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-from-cart')) {
                const productId = parseInt(e.target.dataset.id);
                this.removeItem(productId);
                this.showNotification(`Товар удален из корзины.`);
            }
        });

        // Обработка изменения количества товаров
        document.addEventListener('change', (e) => {
            if (e.target.classList.contains('cart-item-quantity')) {
                const productId = parseInt(e.target.dataset.id);
                const quantity = parseInt(e.target.value);
                this.updateQuantity(productId, quantity);
            }
        });

        // Обработка очистки корзины
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('clear-cart')) {
                this.clearCart();
                this.showNotification(`Корзина очищена.`);
            }
        });

        this.updateDisplay();
    }

    // Добавление товара в корзину
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
        }, 1000); // Имитация задержки
    }

    // Удаление товара из корзины
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.save();
        this.updateDisplay();
    }

    // Обновление количества товара
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity > 0 ? quantity : 1;
            this.save();
            this.updateDisplay();
        }
    }

    // Очистка корзины
    clearCart() {
        this.items = [];
        this.save();
        this.updateDisplay();
    }

    // Сохранение корзины в localStorage
    save() {
        try {
            localStorage.setItem('cart', JSON.stringify(this.items));
            this.updateCounter();
        } catch (error) {
            console.error('Ошибка при сохранении в localStorage:', error);
        }
    }

    // Обновление счетчика товаров в корзине
    updateCounter() {
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelector('.cart-counter').textContent = totalItems;
    }

    // Отображение корзины
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

    // Показ уведомлений
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
        // Обработчик для категорий
        document.querySelectorAll('[name="category"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.updateCategoryFilters(checkbox);
                this.filterProducts();
            });
        });

        // Инициализация ценового фильтра
        this.initPriceFilter();
    }

    initPriceFilter() {
        const minPriceInput = document.getElementById('minPrice');
        const maxPriceInput = document.getElementById('maxPrice');
        const currentMinPrice = document.getElementById('currentMinPrice');
        const currentMaxPrice = document.getElementById('currentMaxPrice');

        // Форматирование цены
        const formatPrice = (price) => {
            return parseInt(price).toLocaleString('ru-RU');
        };

        // Обновление отображаемых значений
        const updateDisplay = () => {
            currentMinPrice.textContent = `От ${formatPrice(minPriceInput.value)} ₽`;
            currentMaxPrice.textContent = `До ${formatPrice(maxPriceInput.value)} ₽`;
            
            this.minPrice = parseInt(minPriceInput.value) || 0;
            this.maxPrice = parseInt(maxPriceInput.value) || 100000;
            
            this.filterProducts();
        };

        // Обработчики для полей ввода с дебаунсом
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

        // Инициализация значений
        minPriceInput.value = this.minPrice;
        maxPriceInput.value = this.maxPrice;
        updateDisplay();
    }

    // Остальные методы класса остаются без изменений
    // ...


    // Форматирование цены (100000 -> 100 000)
    formatPrice(price) {
        return parseInt(price).toLocaleString('ru-RU');
    }

    // Обновленная функция фильтрации товаров
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

    // Остальные методы класса остаются без изменений
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

// Инициализация корзины
const cart = new Cart();

// Инициализация фильтров
new ProductFilter();

// Обработчик для обновления страницы при нажатии на заголовок
document.getElementById('siteTitle').addEventListener('click', function() {
    location.reload();
});

// Данные пользователей (хранятся в localStorage)
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initAuthSystem();
});

// Основная функция инициализации системы аутентификации
function initAuthSystem() {
    // Добавляем тестового пользователя если нет пользователей
    if (users.length === 0) {
        users.push({
            id: 1,
            name: "Тестовый Пользователь",
            email: "test@example.com",
            password: "test123",
            registerDate: new Date().toISOString()
        });
        localStorage.setItem('users', JSON.stringify(users));
    }

    checkAuthState();
    initAuthForms();
    initModalCloseHandlers();
}

// Проверка состояния авторизации и обновление UI
function checkAuthState() {
    if (currentUser) {
        updateUIForLoggedInUser();
    } else {
        updateUIForLoggedOutUser();
    }
}

// Обновление интерфейса для авторизованного пользователя
function updateUIForLoggedInUser() {
    // Скрываем кнопки входа/регистрации
    document.querySelectorAll('[data-auth]').forEach(el => {
        el.style.display = 'none';
    });
    
    // Показываем панель пользователя
    const userPanel = document.getElementById('userPanel');
    if (userPanel) {
        userPanel.style.display = 'flex';
        const usernameElement = document.getElementById('username');
        if (usernameElement) {
            usernameElement.textContent = currentUser.name;
        }
    }
}

// Обновление интерфейса для неавторизованного пользователя
function updateUIForLoggedOutUser() {
    // Показываем кнопки входа/регистрации
    document.querySelectorAll('[data-auth]').forEach(el => {
        el.style.display = 'flex';
    });
    
    // Скрываем панель пользователя
    const userPanel = document.getElementById('userPanel');
    if (userPanel) {
        userPanel.style.display = 'none';
    }
}

// Инициализация форм авторизации
function initAuthForms() {
    // Форма входа
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value.trim();
            loginUser(email, password);
        });
    }

    // Форма регистрации
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('regName').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const password = document.getElementById('regPassword').value.trim();
            registerUser(name, email, password);
        });
    }
}

// Инициализация обработчиков закрытия модальных окон
function initModalCloseHandlers() {
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target.id);
        }
    });

    document.querySelectorAll('.modal .close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });
}

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
        updateUIForLoggedInUser();
        showNotification(`Добро пожаловать, ${user.name}!`);
        
        // Очищаем форму входа
        const loginForm = document.getElementById('loginForm');
        if (loginForm) loginForm.reset();
    } else {
        showNotification('Неверный email или пароль', 'error');
    }
}

// Функция регистрации
function registerUser(name, email, password) {
    // Валидация
    if (!name || !email || !password) {
        showNotification('Все поля обязательны для заполнения', 'error');
        return;
    }

    if (users.some(u => u.email === email)) {
        showNotification('Пользователь с таким email уже существует', 'error');
        return;
    }

    if (password.length < 6) {
        showNotification('Пароль должен содержать минимум 6 символов', 'error');
        return;
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        registerDate: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Автоматический вход после регистрации
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    closeModal('registerModal');
    updateUIForLoggedInUser();
    showNotification(`Регистрация прошла успешно! Добро пожаловать, ${name}!`);
    
    // Очищаем форму регистрации
    const registerForm = document.getElementById('registerForm');
    if (registerForm) registerForm.reset();
}


// Обновленная функция выхода
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
    showNotification('Вы успешно вышли из аккаунта');
}

// Функция управления интерфейсом
function updateAuthUI() {
    const userPanel = document.getElementById('userPanel');
    const authButtons = document.getElementById('authButtons');
    
    if (currentUser) {
        userPanel.style.display = 'flex';
        authButtons.style.display = 'none';
        document.getElementById('username').textContent = currentUser.name;
    } else {
        userPanel.style.display = 'none';
        authButtons.style.display = 'flex';
    }
}

// Показ списка аккаунтов
function showAccountsModal() {
    const accounts = JSON.parse(localStorage.getItem('users')) || [];
    const accountsList = document.getElementById('accountsList');
    
    accountsList.innerHTML = accounts.map(account => `
        <div class="account-item" data-id="${account.id}">
            <div class="account-info">
                <div class="account-name">${account.name}</div>
                <div class="account-email">${account.email}</div>
                <small>Зарегистрирован: ${new Date(account.registerDate).toLocaleDateString()}</small>
            </div>
            <div class="account-actions">
                <button class="account-btn login-btn" onclick="loginAsUser(${account.id})">
                    <i class="fas fa-sign-in-alt"></i> Войти
                </button>
                <button class="account-btn delete-btn" onclick="deleteAccount(${account.id})">
                    <i class="fas fa-trash"></i> Удалить
                </button>
            </div>
        </div>
    `).join('');
    
    showModal('accountsModal');
}

// Вход под выбранным пользователем
function loginAsUser(userId) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.id === userId);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateAuthUI();
        closeModal('accountsModal');
        showNotification(`Вы вошли как ${user.name}`);
    }
}

// Удаление аккаунта
function deleteAccount(userId) {
    if (confirm('Вы уверены, что хотите удалить этот аккаунт?')) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users = users.filter(u => u.id !== userId);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Если удаляем текущего пользователя - разлогиниваем
        if (currentUser && currentUser.id === userId) {
            logout();
        }
        
        showAccountsModal(); // Обновляем список
        showNotification('Аккаунт удален');
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем состояние авторизации
    currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    
    // Инициализация тестовых данных
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.length === 0) {
        users = [
            {
                id: 1,
                name: "Администратор",
                email: "admin@renaissance.com",
                password: "admin123",
                registerDate: new Date().toISOString()
            },
            {
                id: 2,
                name: "Тестовый Пользователь",
                email: "test@example.com",
                password: "test123",
                registerDate: new Date().toISOString()
            }
        ];
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    updateAuthUI();
});

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
// Инициализация (добавьте в конец файла)
document.getElementById('sortSelect')?.addEventListener('change', filterProducts);
document.querySelectorAll('[name="category"]').forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});
document.getElementById('priceInput')?.addEventListener('input', filterProducts);

// Первоначальная загрузка товаров
filterProducts();
        
 // Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация корзины
    const cart = new Cart();
    
    // Инициализация фильтров
    new ProductFilter();
    
    // Инициализация системы аутентификации
    initAuthSystem();
});  



















































































































































































