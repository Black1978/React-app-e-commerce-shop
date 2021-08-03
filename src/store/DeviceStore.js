import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Refrigerators' },
            { id: 2, name: 'Smartphones' },
            { id: 3, name: 'Notebooks' },
            { id: 4, name: 'TV' },
        ]
        this._brandes = [
            { id: 1, name: 'Sumsung' },
            { id: 2, name: 'Apples' },
        ]
        this._devices = [
            {
                id: 1,
                name: 'Iphone 12 pro',
                price: 12000,
                rating: 5,
                img: 'https://www.ixbt.com/img/x780/n1/news/2021/0/4/1605321957_poznakomtes-s-luchshimi-funkcziyami-iphone-12-pro-max_large.jpg',
            },
            {
                id: 2,
                name: 'Iphone 12 pro',
                price: 12000,
                rating: 5,
                img: 'https://www.ixbt.com/img/x780/n1/news/2021/0/4/1605321957_poznakomtes-s-luchshimi-funkcziyami-iphone-12-pro-max_large.jpg',
            },
            {
                id: 3,
                name: 'Iphone 12 pro',
                price: 12000,
                rating: 5,
                img: 'https://www.ixbt.com/img/x780/n1/news/2021/0/4/1605321957_poznakomtes-s-luchshimi-funkcziyami-iphone-12-pro-max_large.jpg',
            },
            {
                id: 4,
                name: 'Iphone 12 pro',
                price: 12000,
                rating: 5,
                img: 'https://www.ixbt.com/img/x780/n1/news/2021/0/4/1605321957_poznakomtes-s-luchshimi-funkcziyami-iphone-12-pro-max_large.jpg',
            },
            {
                id: 5,
                name: 'Iphone 12 pro',
                price: 12000,
                rating: 5,
                img: 'https://www.ixbt.com/img/x780/n1/news/2021/0/4/1605321957_poznakomtes-s-luchshimi-funkcziyami-iphone-12-pro-max_large.jpg',
            },
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brandes = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    get types() {
        return this._types
    }
    get brands() {
        return this._brandes
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}
