package com.space.ast;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.space.ast.domain.Genre;
import com.space.ast.domain.GenreRepository;
import com.space.ast.domain.Music;
import com.space.ast.domain.MusicRepository;

@RestController
public class MusicController {

	@Autowired
	private MusicRepository musicRepository; 
	
	@Autowired
	private GenreRepository genreRepository;
	
	@RequestMapping(value="/musicList",method=RequestMethod.GET)
	public ResponseEntity<Iterable<Music>> musicList(){
		Iterable<Music> musicList = musicRepository.findAll();
		return new ResponseEntity<Iterable<Music>>(musicList,HttpStatus.OK);
	}
	
	@RequestMapping(value="/genreList", method=RequestMethod.GET)
	public ResponseEntity<Iterable<Genre>> genreList(){
		Iterable<Genre> genres = genreRepository.findAll();
		return new ResponseEntity<Iterable<Genre>>(genres,HttpStatus.OK);
	}
}
