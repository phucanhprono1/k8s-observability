package fa.training.carrental.repositories;

import fa.training.carrental.entities.RefreshToken;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RefreshTokenRepository extends BaseRepository<RefreshToken, Integer> {
    Optional<RefreshToken> findByToken(String token);
    @Modifying
    @Transactional
    @Query("delete from RefreshToken r where r.token = :token")
    void deleteByToken(@Param("token") String token);
}
