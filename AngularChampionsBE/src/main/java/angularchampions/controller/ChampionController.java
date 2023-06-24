package angularchampions.controller;

import angularchampions.repository.Champion;
import angularchampions.repository.ChampionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class ChampionController {

    @Autowired
    private ChampionRepository championRepository;

    @GetMapping("champions")
    public List<Champion> getAllChampions(){
        return championRepository.findAll();
    }
}
