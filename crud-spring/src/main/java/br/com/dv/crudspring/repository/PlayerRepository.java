package br.com.dv.crudspring.repository;

import br.com.dv.crudspring.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {
}
