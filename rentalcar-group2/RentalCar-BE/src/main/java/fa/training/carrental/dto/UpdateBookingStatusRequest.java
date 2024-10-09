package fa.training.carrental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UpdateBookingStatusRequest {

    private String currentStatus;

    private String targetStatus;
}
