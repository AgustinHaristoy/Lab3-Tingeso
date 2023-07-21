package cl.usach.preguntasservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class PreguntasServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(PreguntasServiceApplication.class, args);
    }

}
