alter table music_composer add constraint UK_191rvwik6h5s1dwwd5pn84tg5  unique (music_id,composer_id);
alter table music_genres add constraint UK_bqtqv5kmeei1l5agr61vrvy47  unique (music_id,genres_id);
alter table music_composer add constraint FK_191rvwik6h5s1dwwd5pn84tg5 foreign key (composer_id) references composer;
alter table music_composer add constraint FK_2lle6tlmfx8aik9ou10wawf2a foreign key (music_id) references music;
alter table music_genres add constraint FK_bqtqv5kmeei1l5agr61vrvy47 foreign key (genres_id) references genre;
alter table music_genres add constraint FK_kdmt4w2ex195lk4phcxl9drdf foreign key (music_id) references music;
