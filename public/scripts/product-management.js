const deleteProductButtonEllements = document.querySelectorAll('.product-item button');


async function deleteProduct(event){
    const buttonElement = event.target;
    const productId = buttonElement.dataset.productid;
    const csrfToken = buttonElement.dataset.csrfToken;

     const response = await fetch('/admin/products/' + productId + "?_csrf=" + csrfToken,{
        method: 'DELETE'
    });

    if(!response.ok){
        alert('Somenthing went wrong');
        return;
    }

    buttonElement.parentElement.parentElement.parentElement.parentElement.remove();



}

for(const deleteProductButtonEllement of deleteProductButtonEllements){
    deleteProductButtonEllement.addEventListener('click', deleteProduct);
}