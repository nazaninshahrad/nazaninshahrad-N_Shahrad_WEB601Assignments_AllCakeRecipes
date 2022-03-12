import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { Content } from '../helper-files/content-interface';
=======
import { ContentService } from '../services/content.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
<<<<<<< Updated upstream
  contentItemsArray: Content[] = [
    {
      id: 1,
      title: 'Apple Cake',
      description: 'How to make Apple Cake',
      creator: 'nazanin',
      imgURL:
        'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/german_apple_cake_59663_16x9.jpg',
      type: 'Fruit Cakes',
      tags: ['cake', 'friut cake'],
    },
    {
      id: 2,
      title: 'Sponge Cake',
      description: 'how to make Sponge Cake',
      creator: 'nazanin',
      imgURL:
        'https://cdn.momsdish.com/wp-content/uploads/2020/02/Perfect-Sponge-Cake-12-1200x800.jpg',
      type: 'Cake',
      tags: ['cake', 'sponge cake'],
    },
    {
      id: 3,
      title: 'Chocolate Cake',
      description: 'How to make Chocolate Cake',
      creator: 'nazanin',
      imgURL:
        'https://preppykitchen.com/wp-content/uploads/2019/06/Ultimate-Chocolate-Cake-feature-1200.jpg',
      type: 'cake',
      tags: ['cake'],
    },
    {
      id: 4,
      title: 'Carrot Cake',
      description: 'How to make Carrot Cake',
      creator: 'nazanin',
      imgURL:
        'https://www.cookingclassy.com/wp-content/uploads/2020/04/carrot-cake-20-1.jpg',
      type: 'cake',
      tags: ['cake'],
    },
    {
      id: 5,
      title: 'Black forest Cake',
      description: 'How to make Black forest Cake',
      creator: 'nazanin',
      imgURL:
        'https://www.sainsburysmagazine.co.uk/uploads/media/1800x1800/07/4577-black-forest-gateau-560.jpg?v=1-0',
      type: 'cake',
      tags: ['cake'],
    },
    {
      id: 6,
      title: 'German Cake',
      description: 'How to make German Cake',
      creator: 'nazanin',
      imgURL:
        'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18130334/051114082-01-classic-german-chocolate-cake-recipe-main.jpg',
      type: 'cake',
      tags: ['cake', 'classic cake'],
    },
    {
      id: 7,
      title: 'Fruit Cake',
      description: 'How to make Fruit Cake',
      creator: 'nazanin',
      imgURL:
        'https://bakewithshivesh.com/wp-content/uploads/2021/06/IMG_9642-scaled.jpg',
      type: 'cake',
      tags: ['cake', 'fruit cake', 'homemade'],
    },
  ];

  // lengthContent(): number {
  //   return this.contentItemsArray.length;
  // }

  getList() {
    return this.contentItemsArray.slice(0, 6);
  }

  constructor() {}

  ngOnInit(): void {}
=======
  // allItemsArray: Content[] = [
  //   {
  //     id: 1,
  //     title: 'Apple Cake',
  //     description: 'How to make Apple Cake',
  //     creator: 'nazanin',
  //     imgURL:
  //       'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/german_apple_cake_59663_16x9.jpg',
  //     type: 'cookie',

  //     tags: ['cake', 'friut cake'],
  //   },
  //   {
  //     id: 2,
  //     title: 'Sponge Cake',
  //     description: 'how to make Sponge Cake',
  //     creator: 'nazanin',
  //     imgURL:
  //       'https://cdn.momsdish.com/wp-content/uploads/2020/02/Perfect-Sponge-Cake-12-1200x800.jpg',

  //     tags: ['cake', 'sponge cake'],
  //   },
  //   {
  //     id: 3,
  //     title: 'Chocolate Cake',
  //     description: 'How to make Chocolate Cake',
  //     creator: 'nazanin',
  //     imgURL:
  //       'https://preppykitchen.com/wp-content/uploads/2019/06/Ultimate-Chocolate-Cake-feature-1200.jpg',
  //     type: 'cake',
  //     tags: ['cake'],
  //   },
  //   {
  //     id: 4,
  //     title: 'Carrot Cake',
  //     description: 'How to make Carrot Cake',
  //     creator: 'nazanin',
  //     imgURL:
  //       'https://www.cookingclassy.com/wp-content/uploads/2020/04/carrot-cake-20-1.jpg',
  //     type: 'cookie',

  //     tags: ['cake'],
  //   },
  //   {
  //     id: 5,
  //     title: 'Black forest Cake',
  //     description: 'How to make Black forest Cake',
  //     creator: 'nazanin',
  //     imgURL:
  //       'https://www.sainsburysmagazine.co.uk/uploads/media/1800x1800/07/4577-black-forest-gateau-560.jpg?v=1-0',
  //     type: 'cake',
  //     tags: ['cake'],
  //   },
  //   {
  //     id: 6,
  //     title: 'German Cake',
  //     description: 'How to make German Cake',
  //     creator: 'nazanin',
  //     imgURL:
  //       'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18130334/051114082-01-classic-german-chocolate-cake-recipe-main.jpg',
  //     type: 'cake',
  //     tags: ['cake', 'classic cake'],
  //   },
  //   {
  //     id: 7,
  //     title: 'Fruit Cake',
  //     description: 'How to make Fruit Cake',
  //     creator: 'nazanin',
  //     imgURL:
  //       'https://bakewithshivesh.com/wp-content/uploads/2021/06/IMG_9642-scaled.jpg',
  //     type: 'cake',
  //     tags: ['cake', 'fruit cake', 'homemade'],
  //   },
  //   {
  //     id: 8,
  //     title: 'cherry Cake',
  //     description: 'How to make cherry Cake',
  //     creator: 'nazanin',
  //     imgURL:
  //       'https://www.alsothecrumbsplease.com/wp-content/uploads/2019/07/Cherry-Cake-13.jpg',
  //     type: 'cake',
  //     tags: ['cake', 'fruit cake', 'homemade'],
  //   },
  // ];

  allItemsArray: Content[] = [];
  message: string = '';
  isexist: boolean = true;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getContents().subscribe((res) => {
      console.log(res);
    });

    this.contentService.getContentById(1).subscribe((res) => {
      console.log(res);
    });
  }

  search(title: string) {
    let index = this.allItemsArray.findIndex(
      (item) => item.title.toLowerCase() == title.toLowerCase()
    );
    console.log(index);

    if (index == -1) {
      this.message = `this title : ${title} does not exist.`;
      this.isexist = false;
    } else {
      this.message = `this title : ${title} exists.`;
      this.isexist = true;
    }
  }

  // addContentToList(newContentFromChild: Content) {
  //   this.allItemsArray.push(newContentFromChild);
  //   this.allItemsArray = [...this.allItemsArray];

  //   console.log('new contenet added successfully');
  // }
>>>>>>> Stashed changes
}
