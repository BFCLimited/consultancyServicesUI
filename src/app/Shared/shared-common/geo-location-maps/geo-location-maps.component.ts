// import { MapsAPILoader } from '@agm/core';
import { DOCUMENT } from "@angular/common";
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

declare const google: any;

@Component({
  selector: 'app-geo-location-maps',
  templateUrl: './geo-location-maps.component.html',
  styleUrls: ['./geo-location-maps.component.scss']
})
export class GeoLocationMapsComponent implements OnInit {
  @Input("searchType") searchType: "map" | "input" = "input";

  @Input("latitude") latitudeInEditMode: number | undefined;

  @Input("longitude") longitudeInEditMode: number | undefined;

  @Output("googleGeoLocationsSelected")
  googleGeoLocationsSelected = new EventEmitter();

  @Output("pointDragValue")
  pointDragValue = new EventEmitter();

  dragpoint: any;

  place: any;

  SearchPlacesForm: NgForm | undefined;

  public shippingAddress: string | undefined;

  marker: any;

  map: any;

  markers: any[] = [];

  constructor(
    public _closeDailogRef: MatDialogRef<GeoLocationMapsComponent>,
    @Inject(DOCUMENT) private document: Document,
    private renderer2: Renderer2
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.latitudeInEditMode);
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
     this.loadAutoComplete();
    // this[this.initMethodName]();
  }

  private loadAutoComplete() {
    const url = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA5eGzbXsE6LQTUxa5b1HCJAN_vXil_-LI&libraries=places&v=weekly`;
    setTimeout(() => {
      this.loadScript(url).then(() => {
        // this[this.initMethodName]();
        this.initAutoCompleteInput();
        console.log(this);
      });
    }, 100);
  }

  private loadScript(url: any) {
    return new Promise((resolve, reject) => {
      const script = this.renderer2.createElement("script");
      script.type = "text/javascript";
      script.src = url;
      script.text = ``;
      script.async = false;
      script.defer = true;
      script.onload = resolve;
      script.onerror = reject;
      this.renderer2.appendChild(this.document.head, script);
    });
  }

  initAutoCompleteInput() {
    console.log("initAutoCompleteInput");
    const input = document.getElementById(
      "txtSearchPlaces"
    ) as HTMLInputElement;
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.setFields(["address_components", "geometry", "icon", "name"]);
    // autocomplete.setTypes(["address"])
    autocomplete.addListener("place_changed", () => {
      this.place = autocomplete.getPlace();
      const lat = this.place.geometry.location.lat();
      const lng = this.place.geometry.location.lng();

      // this.initAutocompleteWithMapWithAutoComplete(this.place, lat, lng);
      if (this.searchType === "map") {
        this.setMarkerPosition(this.place);
      }

      // const componet=this.place.address_components.component.types[0]

      this.googleGeoLocationsSelected.emit(this.place);
      console.log(this.place, "MAIN");
      console.log(this.place.address_components.types, "selected place");
      console.log(this.place.html_attributions, "selected HTML");
      console.log(this.place.result, "selected Results");
      console.log(this.place.geometry.location.lat(), "selected lat long");
      console.log(this.place.geometry.location.lng(), "selected lat long");
      // this._closeDailogRef.close(this.place);
      // this.closeDialog(this.place);
      if (!this.place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        alert("No details available for input:" + input.value);
        return;
      } else {
        return;
      }
    });

    if (
      this.searchType === "map" &&
      !this.latitudeInEditMode &&
      !this.longitudeInEditMode
    )
      this.initMapWithAutoComplete();
    if (
      this.searchType === "map" &&
      this.latitudeInEditMode &&
      this.longitudeInEditMode
    )
      this.initMapWithAutoComplete(
        this.latitudeInEditMode,
        this.longitudeInEditMode
      );
  }

  // TODO: Not in User as of now
  initAutocompleteWithMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 17.385, lng: 78.4867 },
      zoom: 13,
      mapTypeId: "roadmap",
      fields: ["address_components", "geometry", "icon", "name"],

      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.BOTTOM_CENTER,
      },
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT,
      },
      scaleControl: false,
      streetViewControl: false,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.BOTTOM_CENTER,
      },
    });

    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");

    const searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });

    let markers: any[];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
      this.place = places;

      if (places.length == 0) {
        return;
      }
      // Clear out the old markers.
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      places.forEach((place: any) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }

        // We are not ausing any icon for map, we are using the default location icon
        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };

        // Create a marker for each place.
        const marker = new google.maps.Marker({
          map,
          draggable: true,
          title: place.name,
          position: place.geometry.location,
        });
        marker.addListener("dragend", (event: any) => {
          console.log(event);
          console.log(event.latLng.lat());
          console.log(event.latLng.lng());
          this.dragpoint = event.latLng;
          console.log(this.dragpoint);
        });

        markers.push(marker);

        this.pointDragValue.emit(this.dragpoint);

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
      console.log();
      this.googleGeoLocationsSelected.emit(this.place[0]);
      console.log(this.place[0].geometry.location.lat(), "selected lat long");
      console.log(this.place[0].geometry.location.lng(), "selected lat long");
    });
  }
  // TODO: Not in User as of now

  initMapWithAutoComplete(lat?: number, lng?: number) {
    const mapConfig = {
      center: { lat: lat || 17.385, lng: lng || 78.4867 },
      zoom: 13,
      mapTypeId: "roadmap",
      fields: ["address_components", "geometry", "icon", "name"],

      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.BOTTOM_CENTER,
      },
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT,
      },
      scaleControl: false,
      streetViewControl: false,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.BOTTOM_CENTER,
      },
    };

    const map = new google.maps.Map(document.getElementById("map"), mapConfig);
    this.map = map;

    if (lat && lng) {
      this.setMarkerPositionInUpdateMode(
        !!lat ? lat : 17.385,
        !!lng ? lng : 78.4867
      );
    }
  }

  setMarkerPosition(places: any) {
    const bounds = new google.maps.LatLngBounds();
    if (places) {
      if (!places.geometry || !places.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      if (places.length == 0) {
        return;
      }
      // Clear out the old this.markers.
      this.markers.forEach((marker) => {
        marker.setMap(null);
      });
      this.markers = [];

      // Create a marker for each places.
      const marker = new google.maps.Marker({
        map: this.map,
        draggable: true,
        title: places.name,
        position: places.geometry.location,
      });
      this.marker = marker;

      marker.addListener("dragend", (event: any) => {
        this.dragpoint = event.latLng;
        console.log(this.dragpoint);
        this.pointDragValue.emit(this.dragpoint);
      });

      this.markers.push(marker);

      if (places.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(places.geometry.viewport);
      } else {
        bounds.extend(places.geometry.location);
      }

      this.map.fitBounds(bounds);
      // this.pointDragValue.emit(this.dragpoint);
    }
  }

  setMarkerPositionInUpdateMode(lat: number, lng: number, placeName?: string) {
    const bounds = new google.maps.LatLngBounds();
    if (lat && lng) {
      // Clear out the old this.markers.
      this.markers.forEach((marker) => {
        marker.setMap(null);
      });
      this.markers = [];

      // Create a marker for each places.
      const marker = new google.maps.Marker({
        map: this.map,
        draggable: true,
        // title: 'Kavali',
        position: { lat: lat, lng: lng },
      });
      this.marker = marker;

      marker.addListener("dragend", (event: any) => {
        this.dragpoint = event.latLng;
        console.log(this.dragpoint);
        this.pointDragValue.emit(this.dragpoint);
      });

      this.markers.push(marker);

      bounds.extend({ lat: lat, lng: lng });

      this.map.fitBounds(bounds);
      // this.pointDragValue.emit(this.dragpoint);
    }
  }

  closeDialog(any: any) {
    console.log(any, "Any");
    setTimeout(() => {
      this._closeDailogRef.close(any);
    }, 100);
  }

  closeDialogref() {
    setTimeout(() => {
      this._closeDailogRef.close();
    }, 100);
  }

  ngOnChanges() {
    // console.log(
    //   this.latitudeInEditMode,
    //   this.longitudeInEditMode,
    //   "On Changes of Google Map Component"
    // );
    // if (this.latitudeInEditMode && this.longitudeInEditMode) {
    //   this.setMarkerPositionInUpdateMode(
    //     +this.latitudeInEditMode,
    //     +this.longitudeInEditMode
    //   );
    // }
  }
}

// {long_name: "Kavali Yadavalli", short_name: "Kavali Yadavalli", types: Array(2)}
// 1: {long_name: "Sri Potti Sriramulu Nellore District", short_name: "Sri Potti Sriramulu Nellore District", types: Array(2)}
// 2: {long_name: "Andhra Pradesh", short_name: "AP", types: Array(2)}
// 3: {long_name: "India", short_name: "IN", types: Array(2)}
// 4: {long_name: "524234", short_name: "524234", types: Array(

