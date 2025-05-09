user = id, name, email, password, role 
hotel = id, name, city, state, country, rate, comidities, regular_checking, regular_checkout
room = id hotel_id type(SINGLE,DOUBLE,SUIT) description price_night, capacity, available, pictures, comodities, 
reservation = id user_id room_id checkin checkout status(PEDING CONFIRMED CANCELED PAID)  hospities
review = id reservation_id rate coment date