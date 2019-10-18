import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  myJson = [
    { 'id': 1, 'type': 'solid', 'name': 'quail & pumpkin', 'price': 1.75, 'mfg': 'Solid Gold', 'category': 'food', 'active': false }
    , { 'id': 2, 'type': 'wet', 'name': 'chicken & rice', 'price': 2.39, 'mfg': 'Purina', 'category': 'food', 'active': false }
    , { 'id': 3, 'type': 'plushie', 'name': 'Happy Emoji', 'price': 5.75, 'mfg': 'toyco', 'category': 'toy', 'active': false }
    , { 'id': 4, 'type': 'electronic', 'name': 'laser pointer', 'price': 9.95, 'mfg': 'laserco', 'category': 'toy', 'active': false }
    , { 'id': 5, 'type': 'game', 'name': 'Feather Teather', 'price': 1.75, 'mfg': 'tyco', 'category': 'toy', 'active': false }
  ]
  russianBlue = [
    {
      "toy category": "Plushie",
      "Plushie array": [
        {
          "toy name": "Happy Emoji Plushie",
          "toy details": [
            {
              "type": "discrete control",
              "id": "detail-1.1",
              "description": "this is the description of this toy, it's awesome!"
            },
            {
              "type": "discrete control",
              "id": "detail-1.1",
              "description": "this is the 2nd description of this toy, it's really really awesome!"
            }
          ]
        }
        , {
          "toy name": "Bunny Rabbit Plushie",
          "toy details": [
            {
              "type": "discrete control",
              "id": "detail-1.1",
              "description": "this is the description of this toy, it's awesome!"
            },
            {
              "type": "discrete control",
              "id": "detail-1.1",
              "description": "this is the 2nd description of this toy, it's really really awesome!"
            }
          ]
        }
      ]
    },
    {
      "toy category": "Electronic",
      "Plushie array": [
        {
          "toy name": "Laser Pointer",
          "toy details": [
            {
              "type": "discrete control",
              "id": "detail-1.1",
              "description": "this is the description of this toy, it's awesome!"
            },
            {
              "type": "discrete control",
              "id": "detail-1.2",
              "description": "this is the 2nd description of this toy, it's really really awesome!"
            }
          ]
        }
        , {
          "toy name": "Mouse Scrambler",
          "toy details": [
            {
              "type": "discrete control",
              "id": "detail-1.1",
              "description": "Scrambles all over the floor, drives cats bonkers!"
            },
            {
              "type": "discrete control",
              "id": "detail-1.2",
              "description": "(2) AAA batteries required"
            }
          ]
        }
      ]
    },
    {
      "toy category": "Hand Held",
      "Plushie array": [
        {
          "toy name": "Feather Teather",
          "toy details": [
            {
              "type": "discrete control",
              "id": "detail-1.1",
              "description": "Cats Love it!"
            },
            {
              "type": "discrete control",
              "id": "detail-1.2",
              "description": "this is the 2nd description of this toy, it's really really awesome!"
            }
          ]
        }
        , {
          "toy name": "Fur Grooming Glove",
          "toy details": [
            {
              "type": "discrete control",
              "id": "detail-1.1",
              "description": "Pet the shedding away!"
            },
            {
              "type": "discrete control",
              "id": "detail-1.2",
              "description": "Great for cat's coats!"
            }
          ]
        }
      ]
    }
  ];

  constructor() {
  }
}
