package br.com.dv.crudspring.repository;

import br.com.dv.crudspring.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Long> {
}
