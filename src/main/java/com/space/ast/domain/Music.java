package com.space.ast.domain;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Music {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String title;
	private String originalTitle;
	private String overview;
	private String posterPath;
	
	@OneToMany
	private List<Genre> genres = new ArrayList<Genre>();
	@OneToMany
	private List<Composer> composer = new ArrayList<Composer>();
	private String library;
	private String tagline;
	
	protected Music(){}

	public int getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public String getOriginalTitle() {
		return originalTitle;
	}

	public String getOverview() {
		return overview;
	}

	public String getPosterPath() {
		return posterPath;
	}

	public List<Genre> getGenres() {
		return genres;
	}

	public List<Composer> getComposer() {
		return composer;
	}

	public String getLibrary() {
		return library;
	}

	public String getTagline() {
		return tagline;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setOriginalTitle(String originalTitle) {
		this.originalTitle = originalTitle;
	}

	public void setOverview(String overview) {
		this.overview = overview;
	}

	public void setPosterPath(String posterPath) {
		this.posterPath = posterPath;
	}

	public void addGenre(Genre genre) {
		this.genres.add(genre);
	}

	public void setLibrary(String library) {
		this.library = library;
	}

	public void setTagline(String tagline) {
		this.tagline = tagline;
	}

	public void addComposer(Composer composer) {
		this.composer.add(composer);
		
	}
	
}
