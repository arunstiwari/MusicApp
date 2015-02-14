package com.space.ast.domain;

public class MusicBuilder {
	
	private Music music = new Music();

	public Music build() {
		return music;
	}

	public MusicBuilder title(String title) {
		music.setTitle(title);
		return this;
	}

	public MusicBuilder originalTitle(String originalTitle) {
		music.setOriginalTitle(originalTitle);
		return this;
	}

	public MusicBuilder overview(String overview) {
		music.setOverview(overview);
		return this;
	}

	public MusicBuilder library(String library) {
		music.setLibrary(library);
		return this;
	}

	public MusicBuilder posterPath(String posterPath) {
		music.setPosterPath(posterPath);
		return this;
	}

	public MusicBuilder genre(Genre genre) {
		music.addGenre(genre);
		return this;
	}

	public MusicBuilder composer(Composer composer) {
		music.addComposer(composer);
		return this;
	}

	public MusicBuilder tagline(String tagline) {
		music.setTagline(tagline);
		return this;
	}
	
}
