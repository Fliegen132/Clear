using UnityEngine;

public class StateController : MonoBehaviour
{
    public void SetPlayerView(PlayerView player)
    {
        _playerView = player;
        _playerView.gameObject.SetActive(true);
        InitStates();
    }

    private void InitStates()
    {
        _moveState = new MoveState(_playerView, speed);
        _idleState = new IdleState();
        ChangeState(_idleState);
    }

    private void Update()
    {
        if (_playerView == null)
            return;
        if (_currentState != null)
        {
            _currentState.UpdateState();
        }

        if (_playerView.GetJoystick().Horizontal != 0 || _playerView.GetJoystick().Vertical != 0)
        {
            ChangeState(_moveState);
            isMove = true;
        }
        else
        {
            ChangeState(_idleState);
            isMove = false;
        }
    }

    private void FixedUpdate()
    {
        if(_currentState != null) 
        {
            _currentState.FixedUpdateState();
        }
    }

    public void ChangeState(IState state)
    {
        if (_currentState == state)
            return;
        if (_currentState != null)
        {
            _currentState.OnExit();
        }
        _currentState = state;
        _currentState.OnEnter();
    }

    public bool GetIsMove() => isMove;

    [SerializeField] private float speed;
    [SerializeField] private bool isMove = false;
    private PlayerView _playerView;
    private MoveState _moveState;
    private IdleState _idleState;

    private IState _currentState;

}
