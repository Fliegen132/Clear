using UnityEngine;

public class MoveState : IState
{
    public MoveState(PlayerView player, float speed)
    {
        _playerView = player;
        _speed = speed;
        _camTransform = Camera.main.transform;
        transform = _playerView.transform;

        _joystick = player.GetJoystick();
        _animator = player.GetAnimator();
    }

    public void OnEnter()
    {
        _animator.SetBool("Move", true);
       // Debug.Log("Enter on moveState");
    }

    public void UpdateState()
    {

    }

    public void FixedUpdateState()
    {
        Move();
        Rotate();
    }

    private void Move()
    {
        Vector3 camPosition = new Vector3(_camTransform.position.x, transform.position.y, _camTransform.position.z);
        Vector3 direction = (transform.position - camPosition).normalized;

        Vector3 forwardMovement = direction * _joystick.Vertical;
        Vector3 horizontalMovement = _camTransform.right * _joystick.Horizontal;

        _movement = Vector3.ClampMagnitude(forwardMovement + horizontalMovement, 1);

        transform.Translate(_movement * _speed * Time.deltaTime, Space.World);

    }

    private void Rotate()
    {
        if (_movement != Vector3.zero)
        { 
            Quaternion rotation = Quaternion.LookRotation(-_movement);
            transform.rotation = Quaternion.RotateTowards(transform.rotation, rotation, _rotationSpeed * Time.deltaTime);
        }
    }

    public void OnExit()
    {
        _animator.SetBool("Move", false);
        //Debug.Log("Exit on move state");
    }

    private PlayerView _playerView;
    private float _speed;
    private Transform _camTransform;
    private Transform transform;
    private DynamicJoystick _joystick;
    private Animator _animator;
    private Vector3 _movement;
    private const int _rotationSpeed = 1000;
}
