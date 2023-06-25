package angularchampions.controller;

import angularchampions.repository.Champion;
import angularchampions.repository.ChampionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class ChampionController {

    @Autowired
    private ChampionRepository championRepository;

    @GetMapping("/champions")
    @CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
    public List<Champion> getAllChampions(){
        return championRepository.findAll();
    }

    @PostMapping("/champions")
    @CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
    public Champion createChampion(@RequestBody Champion champion){
        return championRepository.save(champion);
    }

    @PutMapping("/champions")
    public Champion updateChampion(@RequestBody Champion champion){
        return championRepository.save(champion);
    }

    @DeleteMapping("/champions")
    public void deleteChampion(@RequestBody Champion champion){
        championRepository.delete(champion);
    }
}
