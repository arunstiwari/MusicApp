insert into composer (name) values ('Gilles Cardoni');
insert into composer (name) values ('Daniel Emile Finot');
insert into composer (name) values ('Jean-Paul Soullier');
insert into composer (name) values ('Various');
insert into composer (name) values ('Amar Mohile');
insert into composer (name) values ('Sean Hoffman');
insert into composer (name) values ('Gregory Sweeney');
insert into composer (name) values ('Dave Hewson');
insert into composer (name) values ('Gooding');
insert into composer (name) values ('Gregor Narholz');

insert into composer (name) values ('Gerard Gueudin');
insert into composer (name) values ('Frederick Charles Sicart');


insert into composer (name) values ('Caloun');
insert into composer (name) values ('Peter Marsh');
insert into composer (name) values ('Mikel Giffin');

insert into genre (name) values ('Ballad');
insert into genre (name) values ('Romantic');
insert into genre (name) values ('Horror');
insert into genre (name) values ('Instrumental');
insert into genre (name) values ('Classical');
insert into genre (name) values ('Western');
insert into genre (name) values ('Folk');
insert into genre (name) values ('Adventure');
insert into genre (name) values ('Dreams');
insert into genre (name) values ('Blue');
insert into genre (name) values ('Rock');
insert into genre (name) values ('Contemporary');

insert into music (id, library, original_title, overview, poster_path, tagline, title) values (default, 'AX Music', 'AXS 2270 - DOLCE VITA','Goodtimes, great moods and a massive feel good factor', 'AXS-2270', 'great mood, feel good', 'AXS 2270 - DOLCE VITA');
insert into music_composer (music_id, composer_id) values (1, 11);
insert into music_composer (music_id, composer_id) values (1, 12);
insert into music_genres (music_id, genres_id) values (1, 1);
insert into music_genres (music_id, genres_id) values (1, 2);

insert into music (id, library, original_title, overview, poster_path, tagline, title) values (default, 'AX Music', 'AXS 2269 - BALLAD SONGS','A collection of warm, tender and hopeful ballads featuring male vocals.', 'AXS-2269', 'warm, tender, hopeful', 'AXS 2269 - BALLAD SONGS');
insert into music_composer (music_id, composer_id) values (2, 13);
insert into music_composer (music_id, composer_id) values (2, 14);
insert into music_genres (music_id, genres_id) values (2, 1);

insert into music (id, library, original_title, overview, poster_path, tagline, title) values (default, 'AX Music', 'AXS 2265 - TRAVEL DIARY','Folky guitar tracks perfect to transport you to your holiday destination', 'AXS-2265', 'guitar, holiday', 'AXS 2265 - TRAVEL DIARY');
insert into music_composer (music_id, composer_id) values (3, 1);
insert into music_composer (music_id, composer_id) values (3, 2);
insert into music_composer (music_id, composer_id) values (3, 3);
insert into music_genres (music_id, genres_id) values (3, 7);
insert into music_genres (music_id, genres_id) values (3, 8);
insert into music_genres (music_id, genres_id) values (3, 4);

insert into music (id, library, original_title, overview, poster_path, tagline, title) values (default, 'Nightingale', 'NIGHT 107 - ROMANCE DREAMS & REFLECTIONS','From the innocence of a first kiss and the beauty of true love, to the sorrows of last goodbyes and losing loved ones, this CD captures the moods and emotions of romance, dreams, memories and reflections.', 'NIGHT-107', 'first kiss, romance, dreams, memories', 'NIGHT 107 - ROMANCE DREAMS & REFLECTIONS');
insert into music_composer (music_id, composer_id) values (4, 4);
insert into music_genres (music_id, genres_id) values (4, 2);
insert into music_genres (music_id, genres_id) values (4, 9);

insert into music (id, library, original_title, overview, poster_path, tagline, title) values (default, 'Nightingale', 'NIGHT_NIGHT_0125 - A Taste Of India','A stunning collection of Indian-flavored tracks by acclaimed Bollywood composer Amar Mohile.', 'NIGHT-125', 'classical, Indian, bollywood', 'NIGHT_NIGHT_0125 - A Taste Of India');
insert into music_composer (music_id, composer_id) values (5, 5);
insert into music_genres (music_id, genres_id) values (5, 5);
insert into music_genres (music_id, genres_id) values (5, 2);

insert into music (id, library, original_title, overview, poster_path, tagline, title) values (default, 'KPM Music', 'JM 89 - Guitar USA 2','All things guitar: Americana blues, rock, rocktronica and rockabilly', 'JM-89', 'guitar, Americana blue, rock', 'JM 89 - Guitar USA 2');
insert into music_composer (music_id, composer_id) values (6, 6);
insert into music_composer (music_id, composer_id) values (6, 7);
insert into music_genres (music_id, genres_id) values (6, 10);
insert into music_genres (music_id, genres_id) values (6, 11);
insert into music_genres (music_id, genres_id) values (6, 2);

insert into music (id, library, original_title, overview, poster_path, tagline, title) values (default, 'KPM Music', 'KPM 853 - Quirky Underscores','Curiously curious, charmingly charming small ensemble beds and underscores', 'KPM-853', 'charming,quirky underscores', 'KPM 853 - Quirky Underscores');
insert into music_composer (music_id, composer_id) values (7,4);
insert into music_genres (music_id, genres_id) values (7, 2);

insert into music (id, library, original_title, overview, poster_path, tagline, title) values (default, 'KPM Music', 'KPM 829 - Classical Evolutions 1','FEATURED: Jubilant, dramatic, grand and inspiring classical music evolved…', 'KPM-829', 'jubilant,dramatic,inspiring, classical', 'KPM 829 - Classical Evolutions 1');
insert into music_composer (music_id, composer_id) values (8,8);
insert into music_genres (music_id, genres_id) values (8, 2);
insert into music_genres (music_id, genres_id) values (8, 1);
insert into music_genres (music_id, genres_id) values (8, 5);

insert into music (id, library, original_title, overview, poster_path, tagline, title) values (default, 'Kingdom 2', 'KING 87 - Turbulent Tides','Chilling electronic underscores are at once heartbreakingly nostalgic and breathtakingly lyrical.', 'KING-87', 'nostalgic,electronic underscores,lyrical', 'KING 87 - Turbulent Tides');
insert into music_composer (music_id, composer_id) values (9,9);
insert into music_genres (music_id, genres_id) values (9, 2);

insert into music (id, library, original_title, overview, poster_path, tagline, title) values (default, 'Kingdom 2', 'KING 65 - Morning Light Anthems','Early morning musings and late night resolutions.', 'KING-65', 'early morning, night resolutions', 'KING 65 - Morning Light Anthems');
insert into music_composer (music_id, composer_id) values (10,15);
insert into music_composer (music_id, composer_id) values (10,9);
insert into music_genres (music_id, genres_id) values (10, 9);

insert into music (id, library, original_title, overview, poster_path, tagline, title) values (default, 'Sonoton', 'SCD 881 - Grooves And Pads 2','Contemporary beds in various styles and versions: full, rhythm underscore, ambient underlay and 30 second commercial length.', 'SCD-881', 'contemporary, rhythm underscore', 'SCD 881 - Grooves And Pads 2');
insert into music_composer (music_id, composer_id) values (11,4);
insert into music_composer (music_id, composer_id) values (11,12);

insert into music (id, library, original_title, overview, poster_path, tagline, title) values (default, 'Sonoton', 'SCDV 300 - Quiet Intensity 2 - Drama','Cinematic minimalist concepts delivering a powerful yet subtle tool for underscoring, composed and mixed with narration in mind.', 'SCDV-300', 'underscoring, narration in mind', 'SCDV 300 - Quiet Intensity 2 - Drama');
insert into music_composer (music_id, composer_id) values (12,10);
insert into music_composer (music_id, composer_id) values (12,12);
