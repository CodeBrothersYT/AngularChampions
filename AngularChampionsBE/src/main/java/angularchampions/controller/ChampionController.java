package angularchampions.controller;

import angularchampions.DTOs.ChampionDTO;
import angularchampions.exceptions.ResourceNotFoundException;
import angularchampions.mapper.ChampionMapper;
import angularchampions.repository.Champion;
import angularchampions.repository.ChampionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/")
public class ChampionController {

    private ChampionRepository championRepository;
    @Autowired
    private ChampionMapper championMapper;

    public ChampionController(ChampionRepository championRepository) {
        this.championRepository = championRepository;
    }

    @GetMapping("/champions")
    @CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
    public List<Champion> getAllChampions(){
        return championRepository.findAll();
    }

    @GetMapping("/champions/{id}")
    @CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
    public ResponseEntity<Champion> getChampionById(@PathVariable Long id){
        Champion champion = championRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No champion found with id: %s".formatted(id)));
        return ResponseEntity.ok(champion);
    }

    @PostMapping("/champions")
    @CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
    public Champion createChampion(@RequestBody ChampionDTO championDTO){
        Champion champion = championMapper.toChampion(championDTO);
        return championRepository.save(champion);
    }

    @PutMapping("/champions/{id}")
    public ResponseEntity<Champion> updateChampion(@PathVariable Long id, @RequestBody ChampionDTO championDTO){
        Champion champion = championRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No champion found with id: %s".formatted(id)));
        championMapper.updateChampionFromDTO(championDTO, champion);
        championRepository.save(champion);
        return ResponseEntity.ok(champion);
    }

    @DeleteMapping("/champions")
    public void deleteChampion(@RequestBody Champion champion){
        championRepository.delete(champion);
    }
}
