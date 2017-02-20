using System.Collections.Generic;
using ShoppingCart.Entities;

namespace ShoppingCart.Repository.Interfaces
{
    public interface IProductRepository
    {
        Product GetProduct(string name);
        IEnumerable<Product> GetProducts();
        void AddProduct(Product product);

        void UpdateProduct(Product product);
        void DeleteProduct(string productName);
    }
}
