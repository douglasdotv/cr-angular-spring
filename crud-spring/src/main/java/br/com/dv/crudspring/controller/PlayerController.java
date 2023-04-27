package br.com.dv.crudspring.controller;

import br.com.dv.crudspring.model.Player;
import br.com.dv.crudspring.repository.PlayerRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/players")
public class PlayerController {

    private final PlayerRepository playerRepository;

    @GetMapping
    public List<Player> getPlayers() {
        return playerRepository.findAll();
    }

}
