package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
			features="C:\\Users\\Vishwarajsinh\\eclipse-workspace\\API_Assignment\\src\\main\\java\\features\\StarWars.feature"
			,glue= {"stepdefinitions"}
			,format= {"pretty","html:test-output", "json:json-output/cucumber.json", "junit:target/cucumber-reports/Cucumber.xml"}
			,monochrome=true
			,strict=true
			,dryRun=false
		)

public class Runner {

}
