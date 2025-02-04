        // We’ll add a tile layer to add to our map, in this case it’s a OSM tile layer.
        // Creating a tile layer usually involves setting the URL template for the tile images
        var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            osm = L.tileLayer(osmUrl, {
                maxZoom: 18,
                attribution: osmAttrib
            });

        // initialize the map on the "map" div with a given center and zoom
        var map = L.map('map').setView([19.04469, 72.9258], 12).addLayer(osm);

        // Script for adding marker on map click
        function onMapClick(e) {

            var marker = L.marker(e.latlng, {
                draggable: true,
                title: "Resource location",
                alt: "Resource Location",
                riseOnHover: true
            }).addTo(map)
                .bindPopup(e.latlng.toString()).openPopup();

            // Update marker on changing it's position
            marker.on("dragend", function (ev) {

                var chagedPos = ev.target.getLatLng();
                this.bindPopup(chagedPos.toString()).openPopup();

            });
        }

        map.on('click', onMapClick);
    
    L.marker([10.2750, -84.8255]).addTo(map).bindPopup("Monteverde, Costa Rica");
    L.marker([43.6532, -79.3832]).addTo(map).bindPopup("Toronto, Canada");
    L.marker([59.3293, 18.0686]).addTo(map).bindPopup("Stockholm, Sweden");
    L.marker([59.9139, 10.7522]).addTo(map).bindPopup("Oslo, Norway");
    L.marker([55.6761, 12.5683]).addTo(map).bindPopup("Copenhagen, Denmark");
    L.marker([-8.350885, 116.037276]).addTo(map).bindPopup("Gili Trawangan, Bali, Indonesia");
    L.marker([-16.9186, 145.7781]).addTo(map).bindPopup("Cairns, AUS");
    L.marker([-33.8688, 151.2093]).addTo(map).bindPopup("Sydney, AUS");
    L.marker([-25.3444, 131.0369]).addTo(map).bindPopup("Uluru, AUS");
    L.marker([29.4241, -98.4936]).addTo(map).bindPopup("San Antonio, TX, USA");
    L.marker([43.0831, -73.7846]).addTo(map).bindPopup("Saratoga Springs, NY, USA");
    L.marker([41.8781, -87.6298]).addTo(map).bindPopup("Chicago, IL, USA");
    L.marker([36.1627, -86.7816]).addTo(map).bindPopup("Nashville, TN, USA");
    L.marker([36.1128, -113.9961]).addTo(map).bindPopup("Grand Canyon, AZ, USA");
    L.marker([37.7749, -122.4194]).addTo(map).bindPopup("San Francisco, CA, USA");
    L.marker([35.6870, -105.9378]).addTo(map).bindPopup("Santa Fe, NM, USA");
    L.marker([44.4759, -73.2121]).addTo(map).bindPopup("Burlington, VT, USA");
    L.marker([40.7128, -74.0059]).addTo(map).bindPopup("New York City, NY, USA");
    L.marker([38.9072, -77.0369]).addTo(map).bindPopup("Washington, D.C., USA");
    L.marker([19.4326, -99.1332]).addTo(map).bindPopup("Mexico City, Mexico");
    L.marker([-0.1807, -78.4678]).addTo(map).bindPopup("Quito, Ecuador");
    L.marker([-1.3928, -78.4269]).addTo(map).bindPopup("Banos, Ecuador");
    L.marker([-0.9538, -90.9656]).addTo(map).bindPopup("Galapagos Islands, Ecuador");
    L.marker([36.1441, -5.3417]).addTo(map).bindPopup("Rock of Gibraltar");
    L.marker([30.32164, 35.48013]).addTo(map).bindPopup("Petra, Jordan");
    L.marker([32.109333, 34.855499]).addTo(map).bindPopup("Tel Aviv, Israel");
    L.marker([31.7683, 35.2137]).addTo(map).bindPopup("Jerusalem, Israel");
    L.marker([32.7940, 34.9896]).addTo(map).bindPopup("Haifa, Israel");
    L.marker([31.4512, 35.3836]).addTo(map).bindPopup("Ein Gedi, Israel");
    L.marker([29.5577, 34.9519]).addTo(map).bindPopup("Eilat, Israel");
    L.marker([32.1848, 34.8713]).addTo(map).bindPopup("Ra'anana, Israel");
    L.marker([31.6688, 34.5743]).addTo(map).bindPopup("Ashkolon, Israel");
    L.marker([32.3215, 34.8532]).addTo(map).bindPopup("Netanya, Israel");
    L.marker([37.9838, 23.7275]).addTo(map).bindPopup("Athens, Greece");
    L.marker([40.6401, 22.9444]).addTo(map).bindPopup("Thessaloniki, Greece");
    L.marker([40.4168, -3.7038]).addTo(map).bindPopup("Madrid, Spain");
    L.marker([41.3851, 2.1734]).addTo(map).bindPopup("Barcelona, Spain");
    L.marker([36.1627, -86.7816]).addTo(map).bindPopup("Nashville, TN, USA");
    L.marker([-36.84846, 174.76333]).addTo(map).bindPopup("Auckland, NZ");
    L.marker([-38.1368, 176.2497]).addTo(map).bindPopup("Rotorua, NZ");
    L.marker([-43.53205, 172.63623]).addTo(map).bindPopup("Christchurch, NZ");
    L.marker([-45.03116, 168.6626]).addTo(map).bindPopup("Queenstown, NZ");
    L.marker([-37.81411, 144.96328]).addTo(map).bindPopup("Melbourne, AUS");
    L.marker([-28.64737, 153.60198]).addTo(map).bindPopup("Byron Bay, AUS");
    L.marker([-18.2871, 147.6992]).addTo(map).bindPopup("Great Barrier Reef, AUS");
    L.marker([-42.88190, 147.32381]).addTo(map).bindPopup("Hobart, Tasmania, AUS");
    L.marker([10.2750, -84.8255]).addTo(map).bindPopup("Monteverde, Costa Rica");
    L.marker([43.6532, -79.3832]).addTo(map).bindPopup("Toronto, Canada");
    L.marker([59.3293, 18.0686]).addTo(map).bindPopup("Stockholm, Sweden");
    L.marker([59.9139, 10.7522]).addTo(map).bindPopup("Oslo, Norway");
    L.marker([55.6761, 12.5683]).addTo(map).bindPopup("Copenhagen, Denmark");
    L.marker([-8.350885, 116.037276]).addTo(map).bindPopup("Gili Trawangan, Bali, Indonesia");
    L.marker([-16.9186, 145.7781]).addTo(map).bindPopup("Cairns, AUS");
    L.marker([-33.8688, 151.2093]).addTo(map).bindPopup("Sydney, AUS");
    L.marker([-25.3444, 131.0369]).addTo(map).bindPopup("Uluru, AUS");
    L.marker([29.4241, -98.4936]).addTo(map).bindPopup("San Antonio, TX, USA");
    L.marker([43.0831, -73.7846]).addTo(map).bindPopup("Saratoga Springs, NY, USA");
    L.marker([41.8781, -87.6298]).addTo(map).bindPopup("Chicago, IL, USA");
    L.marker([36.1627, -86.7816]).addTo(map).bindPopup("Nashville, TN, USA");
    L.marker([36.1128, -113.9961]).addTo(map).bindPopup("Grand Canyon, AZ, USA");
    L.marker([37.7749, -122.4194]).addTo(map).bindPopup("San Francisco, CA, USA");
    L.marker([35.6870, -105.9378]).addTo(map).bindPopup("Santa Fe, NM, USA");
    L.marker([44.4759, -73.2121]).addTo(map).bindPopup("Burlington, VT, USA");
    L.marker([40.7128, -74.0059]).addTo(map).bindPopup("New York City, NY, USA");
    L.marker([38.9072, -77.0369]).addTo(map).bindPopup("Washington, D.C., USA");
    L.marker([19.4326, -99.1332]).addTo(map).bindPopup("Mexico City, Mexico");
    L.marker([-0.1807, -78.4678]).addTo(map).bindPopup("Quito, Ecuador");
    L.marker([-1.3928, -78.4269]).addTo(map).bindPopup("Banos, Ecuador");
    L.marker([-0.9538, -90.9656]).addTo(map).bindPopup("Galapagos Islands, Ecuador");
    L.marker([36.1441, -5.3417]).addTo(map).bindPopup("Rock of Gibraltar");
    L.marker([30.32164, 35.48013]).addTo(map).bindPopup("Petra, Jordan");
    L.marker([32.109333, 34.855499]).addTo(map).bindPopup("Tel Aviv, Israel");
    L.marker([31.7683, 35.2137]).addTo(map).bindPopup("Jerusalem, Israel");
    L.marker([32.7940, 34.9896]).addTo(map).bindPopup("Haifa, Israel");
    L.marker([31.4512, 35.3836]).addTo(map).bindPopup("Ein Gedi, Israel");
    L.marker([29.5577, 34.9519]).addTo(map).bindPopup("Eilat, Israel");
    L.marker([32.1848, 34.8713]).addTo(map).bindPopup("Ra'anana, Israel");
    L.marker([31.6688, 34.5743]).addTo(map).bindPopup("Ashkolon, Israel");
    L.marker([32.3215, 34.8532]).addTo(map).bindPopup("Netanya, Israel");
    L.marker([37.9838, 23.7275]).addTo(map).bindPopup("Athens, Greece");
    L.marker([40.6401, 22.9444]).addTo(map).bindPopup("Thessaloniki, Greece");
    L.marker([40.4168, -3.7038]).addTo(map).bindPopup("Madrid, Spain");
    L.marker([41.3851, 2.1734]).addTo(map).bindPopup("Barcelona, Spain");
    L.marker([36.1627, -86.7816]).addTo(map).bindPopup("Nashville, TN, USA");
    L.marker([-36.84846, 174.76333]).addTo(map).bindPopup("Auckland, NZ");
    L.marker([-38.1368, 176.2497]).addTo(map).bindPopup("Rotorua, NZ");
    L.marker([-43.53205, 172.63623]).addTo(map).bindPopup("Christchurch, NZ");
    L.marker([-45.03116, 168.6626]).addTo(map).bindPopup("Queenstown, NZ");
    L.marker([-37.81411, 144.96328]).addTo(map).bindPopup("Melbourne, AUS");
    L.marker([-28.64737, 153.60198]).addTo(map).bindPopup("Byron Bay, AUS");
    L.marker([-18.2871, 147.6992]).addTo(map).bindPopup("Great Barrier Reef, AUS");
    L.marker([-42.88190, 147.32381]).addTo(map).bindPopup("Hobart, Tasmania, AUS");