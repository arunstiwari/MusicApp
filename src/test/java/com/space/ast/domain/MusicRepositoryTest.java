package com.space.ast.domain;

import static org.junit.Assert.*;

import java.util.Collection;

import javax.persistence.OneToMany;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.space.ast.Application;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes={Application.class})
public class MusicRepositoryTest {

	@Autowired
	private MusicRepository musicRepository;
	
	@Autowired
	private GenreRepository genreRepository;
	
	@Autowired
	private ComposerRepository composerRepository;
	
	@Test
	public void addMusicData() throws Exception {
		Genre genre = genreRepository.findOne(1);
		Genre genre2 = genreRepository.findOne(2);

		Composer composer1 = composerRepository.findOne(1);
		Composer composer2 =composerRepository.findOne(2);

		Music music = new MusicBuilder()
						.title("title")
						.originalTitle("title")
						.overview("overview")
						.library("library")
						.posterPath("posterPath")
						.genre(genre)
						.genre(genre2)
						.composer(composer1)
						.composer(composer2)
						.tagline("tagline")
						.build();
		
		musicRepository.save(music);
	}
	/**
	 * private String posterPath;
	
	@OneToMany
	private Collection<Genre> genres;
	@OneToMany
	private Collection<Composer> composer;
	private String library;
	private String tagline;

	 */
}
