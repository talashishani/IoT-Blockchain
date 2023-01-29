pragma solidity >=0.4.22 <0.9.0;

contract TalaShishani {
    struct RaspberryPiKit {
        string id;
        string hum;
        string temp;
        string touch;
        string fire;
        string pulse;
        string sound;
    }

    mapping(address => bool) public Sensors;
    mapping(uint256 => RaspberryPiKit) public RaspberryPiKits;
    uint256 public RaspberryPiKitsCount;

    function addRaspberryPiKit(
        string memory _id,
        string memory _hum,
        string memory _temp,
        string memory _touch,
        string memory _fire,
        string memory _pulse,
        string memory _sound
    ) public {
        RaspberryPiKitsCount++;
        RaspberryPiKits[RaspberryPiKitsCount] = RaspberryPiKit(
            _id,
            _hum,
            _temp,
            _touch,
            _fire,
            _pulse,
            _sound
        );
    }

    function sensorsadd(uint256 _RaspberryPiKitId) public {
        require(!Sensors[msg.sender]);
        require(_RaspberryPiKitId > 0 && _RaspberryPiKitId <= RaspberryPiKitsCount);
        Sensors[msg.sender] = true;
    }
}
