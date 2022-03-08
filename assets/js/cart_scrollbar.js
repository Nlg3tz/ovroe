$(function() {
    var cartSideBarBody = $("#cartSideBarBody"),
        body = $("body")
        cartBtn = $(".cart_btn"),
        modalOverlay = $(".modal-overlay"),
        cartBtnActive = false

    $(document).on("click", '.cart_btn', function(event){
        event.preventDefault();
        if (cartBtnActive === true) {
            body.removeClass("no-scroll");
            cartSideBarBody.removeClass("show");
            modalOverlay.removeClass("show");
            cartBtnActive = false 
        } else if (cartBtnActive === false) {
            body.addClass("no-scroll");
            cartSideBarBody.addClass("show");
            modalOverlay.addClass("show");
            cartBtnActive = true
        }
        console.log('csdsdcs')
    });

    $(document).on("click", '.modal-overlay', function(event){
        event.preventDefault();
        body.removeClass("no-scroll");
        cartSideBarBody.removeClass("show");
        modalOverlay.removeClass("show");
        cartBtnActive = false 
        console.log('csdsdcs')
    });

    // Cart Products
    const cartQuantityNum = $('#cartProductQuantity');
    const cartBtnQuantityNum = $('#cartBtnProductQuantity');
    let fullprice = $(".cart-fullprice span"),
    cartIconQuantity,
    cartProductQuantityNum,
    cartProductPrice,
    cartContent,
    cartProduct;
    
    function calcfullpriceSum(){
        cartContent = $("#cart");
        let l = cartContent.find(".cart__product").length;
        let fp = 0;
        cartProduct = $(".cart__product").first();

        for(let i = 1; i <= l; i++){
            cartProductPrice = Number(cartProduct.find(".subnav-product__price span").text());
            cartProductQuantityNum = cartProduct.find(".subnav-product__quantity--num").text();
            
            let productSum = cartProductQuantityNum *= cartProductPrice;
            fp += productSum;

            cartProduct = cartProduct.next();
        }

        fp = String(fp);
        fullprice.text(fp);

        cartQuantityNum.text(l);
        cartBtnQuantityNum.text(l);
    }
    calcfullpriceSum();


    function ToggleQuantity(num, i){
        let n = Number(num.text());
        if(i == "+"){
            n++;
            return n;
            
        }
        if(i == "-"){
            n--;
            return n;
        }
        
    }

    // Cart Product Btns
    $(document).on("click", '.cart-product__arrow--plus', function(event){
        event.preventDefault();
        let cartProductQuantity = $(this).siblings(".num");

        cartProductQuantity.text(ToggleQuantity(cartProductQuantity, "+")); 
        calcfullpriceSum()
    });

    $(document).on("click", '.cart-product__arrow--minus', function(event){
        event.preventDefault();
        let cartProductQuantity = $(this).siblings(".num");

        if(Number(cartProductQuantity.text()) > 0){
            cartProductQuantity.text(ToggleQuantity(cartProductQuantity, "-")); 
        };
        calcfullpriceSum()
    });

    $(document).on("click", '.cart-product__delete', function(event){
        event.preventDefault();

        $(this).parents(".cart__product").slideUp(350, function(){
            $(this).detach();
            calcfullpriceSum();
        });
    });




    // cds////////////////////////////////////  

    function generateCartProduct(img, title, price, id){
        return `
            <li class="subnav-content__item cart__product" data-id="${id}">
                <article class="subnav-product">
                    <div class="subnav-product__content">
                        <img src="${img}" alt="" class="subnav-product__img">
                        <div class="subnav-product__text">
                            <h3 class="subnav-product__title">${title}</h3>
                            <div class="subnav-product__price">Rp <span>${price}</span></div>
                        </div>
                    </div>
                    
                    <div class="subnav-product__control">
                        <div class="subnav-product__quantity">
                            <button class="subnav-product__arrow subnav-product__arrow--top">
                                <svg>
                                    <use xlink:href="assets/images/sprite.svg#arrow"></use>
                                </svg>
                            </button>
                            
                            <div class="subnav-product__quantity--num">1</div>
                            
                            <button class="subnav-product__arrow subnav-product__arrow--bottom">
                                <svg>
                                    <use xlink:href="assets/images/sprite.svg#arrow"></use>
                                </svg>
                            </button>
                        </div> 
                        <button class="subnav-product__delete cart-product__delete">
                            <svg>
                                <use xlink:href="assets/images/sprite.svg#trash"></use>
                            </svg>
                        </button>
                    </div>
                </article>
            </li>
        `;
    };

});


