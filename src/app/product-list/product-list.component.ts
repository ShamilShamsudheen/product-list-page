import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface productDetails{
  id:number,
  name:string,
  category:string,
  description:string,
  imageUrl:string,
  price:number
}
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})


export class ProductListComponent implements OnInit{
  public products!:productDetails[];
  public selectedDescription!:string;
  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: 'Elegant Wooden Dining Table',
        description: 'This elegant wooden dining table is crafted with high-quality hardwood, providing durability and a timeless look. It features a spacious surface for family gatherings and dinner parties. The natural wood grain adds warmth to any dining room, making it a perfect centerpiece. Enhance your dining experience with this stylish and sturdy table.',
        category: 'Furniture',
        imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlfGVufDB8fDB8fHww',
        price: 499.99
      },
      {
        id: 2,
        name: 'Luxurious Leather Sofa Set',
        description: 'Indulge in luxury with this luxurious leather sofa set. The set includes a comfortable sofa and matching armchairs, all upholstered in premium leather. The contemporary design and plush cushions provide both style and comfort. Create a sophisticated living space with this high-end sofa set that complements any modern interior.',
        category: 'Furniture',
        imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlfGVufDB8fDB8fHww',
        price: 1299.99
      },
      {
        id: 3,
        name: 'Rustic Wooden Bookshelf',
        description: 'Bring rustic charm to your home with this beautifully crafted wooden bookshelf. Its sturdy construction and multiple shelves provide ample storage for your favorite books, decor, and more. The distressed finish adds character, making it a standout piece in any room. Elevate your home decor with this rustic bookshelf.',
        category: 'Furniture',
        imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlfGVufDB8fDB8fHww',
        price: 299.99
      },
      {
        id: 4,
        name: 'Modern Glass Coffee Table',
        description: 'Upgrade your living room with this modern glass coffee table. The sleek design features a tempered glass top and geometric metal legs, creating a contemporary focal point. The open design adds a sense of spaciousness, while the glass surface is easy to clean. Transform your living space with this chic coffee table.',
        category: 'Furniture',
        imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlfGVufDB8fDB8fHww',
        price: 199.99
      },
      {
        id: 5,
        name: 'Cozy Upholstered Bed Frame',
        description: 'Experience ultimate comfort with this cozy upholstered bed frame. The soft, padded headboard provides a comfortable backrest for reading or watching TV. The neutral fabric complements any bedroom decor, and the sturdy frame ensures long-lasting support. Create a relaxing retreat with this stylish and inviting bed frame.',
        category: 'Furniture',
        imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlfGVufDB8fDB8fHww',
        price: 599.99
      }
    ];
  }
  public showDescription(index:number):void{
    const selectedProduct = this.products[index];
    this.selectedDescription = selectedProduct.description;
    
  }
}
