/* const CampaignCreator = artifacts.require("./CampaignCreator.sol");


let campaignCreator;
let campaignAddress;
let campaign;

before(async () => {
	campaignCreator = await CampaignCreator.new()
    
	var minContribution = '1000000000000';
	var description = 'test CrowdCollab dApp';
	await campaignCreator.createCampaign(minContribution, description);
   	 
	campaignAddress = await campaignCreator.getDeployedCampaigns.call();
    
	campaign = await CrowdCollab.at(campaignAddress[0]);
}); */

contract("Tamaoinchi test", (accounts) => {
	it('room has an address', async () => {
		assert.ok(campaignAddress);
	});
});


