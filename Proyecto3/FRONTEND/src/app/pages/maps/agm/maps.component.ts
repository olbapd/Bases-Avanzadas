import { Component, OnInit, Injectable } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
    selector: 'maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
})

export class MapComponent {
    title: string = 'AGM project';
    latitude: number;
    longitude: number;
    zoom: number;
    ngOnInit() {
        this.setCurrentLocation();
    }

    // Get Current Location Coordinates
    private setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 15;
            });
        }
    }

}